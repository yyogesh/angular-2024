import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function stdCodeValidator(strCode: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value: string = control.value;
        console.log('stdCodeValidator', value)
        if(!value.startsWith(strCode)) {
            return {
                stdCode: true
            }
        }
        return null;
    }
}