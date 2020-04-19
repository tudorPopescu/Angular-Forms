import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public topics = ['Angular', 'ReactJS', 'VueJs'];

  userModel = new User('', 'rob@test.com', 5556666555, '', 'morning', true);
}
