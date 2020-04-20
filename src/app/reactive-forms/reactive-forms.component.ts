import { Component, OnInit } from '@angular/core';
// import FormGroup to initialize RF (reactive forms)
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  registrationForm = new FormGroup({
    userName: new FormControl('Tudor'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

}
