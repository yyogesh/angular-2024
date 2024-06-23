import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { UserService } from "./user.service";
import { Observable, map } from "rxjs";

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

export function compareValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
        console.log('passwordMatchValidator', controlName, matchingControlName, formGroup);
        const firstControl = formGroup.get(controlName)
        const matherControl = formGroup.get(matchingControlName)

        if(!firstControl || !matherControl) {
            return null;
        }

        if(matherControl.errors && !matherControl.errors['misMatch']) {
            return null;
        }

        if(firstControl.value!== matherControl.value) {
             matherControl.setErrors({misMatch: true})
            return {misMatch: true};
        } else {
            matherControl.setErrors(null)
            return null;
        }
        return null;
    }
}

export function checkUserValidation(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return userService.checkIfUserExists(control.value).pipe(
            map((result: boolean) => result ? { userAlreadyExists: true } : null)
        )
    }
}