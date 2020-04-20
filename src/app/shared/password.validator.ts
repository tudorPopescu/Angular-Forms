import { AbstractControl } from "@angular/forms";

// Create a function using AbstractControl validation
// Accepts a control as parameter
// Returns an object or null based on the validation true (passed) or false (failed)
// With cross field validation the control parameter does not refer to the individual form control
// control parameter it reffers to the form group encompassing the different form fields being validated
export function passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password.pristine || confirmPassword.pristine) {
    return null;
  }

  return password && confirmPassword && password.value !== confirmPassword.value ? { 'missMatch' : true } : null;
}
