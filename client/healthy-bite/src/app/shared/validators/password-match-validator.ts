import { FormGroup, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(
  passwordValue: string,
  rePassValue: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const passwordControl = group.get(passwordValue);
    const rePassControl = group.get(rePassValue);

    if (!passwordControl || !rePassControl) {
      return null;
    }

    if (passwordControl.value !== rePassControl.value) {
      return { passwordMatchValidator: true };
    } else {
      return null;
    }
  };
}
