import { Component, OnInit } from '@angular/core';
// import FormGroup to initialize RF (reactive forms)
// import Validator for build-in validation on the forms
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  // getter to shorten the conditions in the html template
  // TODO same for city
  get userName() {
    return this.registrationForm.get('userName');
  }

  registrationForm = this.fb.group({
    userName: ['', Validators.required],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      // use required and min-length error messages on city
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      state: [''],
      postalCode: []
    })
  });

  loadApiData() {
    // setValue() is strict when populating fields (all fields must be passed)
    // patchValue() is not strict when populating fields (optional fields must be passed)
    this.registrationForm.setValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'Suceava',
        state: 'Romania',
        postalCode: 720207
      }
    })
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
