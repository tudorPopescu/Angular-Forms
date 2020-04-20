import { Component, OnInit } from '@angular/core';
import { User } from '../user';
// import the EnrollmentService
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-templated-forms',
  templateUrl: './templated-forms.component.html',
  styleUrls: ['./templated-forms.component.scss']
})

export class TemplatedFormsComponent implements OnInit {
  public topics = ['Angular', 'ReactJS', 'VueJs'];
  public topicHasError = true;
  public submitted = false;
  public errorMsg = '';

  constructor(private _enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }

  userModel = new User('', '', 1234567891, 'default', 'morning', true);

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
