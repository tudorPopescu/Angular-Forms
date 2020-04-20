import { Component, OnInit } from '@angular/core';
// import FormGroup to initialize RF (reactive forms)
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Tudor'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  registrationForm = this.fb.group({
    userName: ['Tudor'],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
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
