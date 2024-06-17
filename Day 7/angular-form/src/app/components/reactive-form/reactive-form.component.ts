import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  name = new FormControl('test');

  profileForm = new FormGroup({
    firstName: new FormControl('firstName value'),
    lastName: new FormControl('lastName value'),
  })

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  onSubmit() {
    console.log(this.name);
    this.name.setValue('newName')
    this.userForm.setValue({
      firstName: 'newFirstName',
      lastName: 'newLastName',
      address: {
        street: 'newStreet',
        city: 'newCity',
        state: 'newState',
        zip: 'newZip',
      }
    })

    this.userForm.get('firstName')?.setValue('asfd')
    this.userForm.controls.firstName.setValue('asfd')

    this.userForm.get('firstName')?.value

    this.userForm.controls.firstName.value

    this.userForm.value

   // this.userForm.get('address')?.get('street')
  }

  onProfileFormSubmit() {
    console.log(this.profileForm);

    this.userForm.patchValue({
      firstName: 'newFirstName',
      address: {
        street: 'newStreet',
        city: 'newCity',
      }
    })
  }

  onUserFormSubmit() {
    console.log(this.userForm);
  }
}
