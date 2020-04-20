import { Component, OnInit } from '@angular/core';
// import FormGroup to initialize RF (reactive forms)
// import Validator for build-in validation on the forms
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
// import custom form validation function file
import { forbiddenNameValidator } from '../shared/user-name.validator';
import { passwordValidator } from '../shared/password.validator';
// import the registration service for the post request
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  registrationForm: FormGroup;

  // getter to shorten the conditions in the html template
  // TODO same for city
  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder, private rs: RegistrationService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', Validators.required],
      email: [''],
      subscribe: [false],
      // perform cross field validation on password and confirm password fields
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        // use required and min-length error messages on city
        city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7), forbiddenNameValidator(/password/)]],
        state: [''],
        postalCode: []
      }),
      alternateEmails: this.fb.array([])
    }, {validator: passwordValidator});

    this.registrationForm.get('subscribe').valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });
  }

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

  onSubmit() {
    console.log(this.registrationForm.value);
    this.rs.register(this.registrationForm.value)
      .subscribe(
        response => {console.log('Success', response)},
        error => console.error('Error!', error)
      )
  }

}
