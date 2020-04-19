import { Component } from '@angular/core';
import { User } from './user';
// import the EnrollmentService
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public topics = ['Angular', 'ReactJS', 'VueJs'];
  public topicHasError = true;
  public submitted = false;
  public errorMsg = '';

  userModel = new User('', '', 1234567891, 'default', 'morning', true);

  constructor(private _enrollmentService: EnrollmentService) { }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = !this.submitted;

    this._enrollmentService.enroll(this.userModel)
        .subscribe(
          data => console.log('Success!', data),
          error => this.errorMsg = error.statusText
        )
  }
}
