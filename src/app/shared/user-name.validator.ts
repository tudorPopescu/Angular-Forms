import { AbstractControl, ValidatorFn } from "@angular/forms";

// custom validator function
export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  /*
    return formControl as parameter
    key: string -> object of type any if the validation fails
    null -> if the validation passed
  */
  return (control: AbstractControl): {[key: string]: any} | null => {
    // if the control contains a forbidden value, set the forbidden flag to true
    const forbidden = forbiddenName.test(control.value);

    // return the name of the validation (forbiddenName)
    // and the value if the validation is false
    // else if validation is true return true
    return forbidden ? { 'forbiddenName': {value: control.value}} : null
  }
}
