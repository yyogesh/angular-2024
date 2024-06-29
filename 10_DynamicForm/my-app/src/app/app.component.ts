import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DyanmicFormComponent } from './dyanmic-form/dyanmic-form.component';

export interface UserFormModel {
  name: FormControl<string>;
}

interface User {
  name: FormControl<string>;
  email: FormControl<string>;
  isAdmin: FormControl<boolean>;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, DyanmicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  userForm: FormGroup;

  user: FormGroup<User> = new FormGroup<User>({
    name: new FormControl('', {nonNullable: true}),
    email: new FormControl('', {nonNullable: true}),
    isAdmin: new FormControl(false, {nonNullable: true}),
});

  // userForm: UntypedFormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.required, Validators.min(0)]],
      isAdmin: [false],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', Validators.required]
      })
    });
  }

  onSubmit() {
    // this.user.controls.isAdmin.value
    this.userForm.get("isAdmin")?.setValue("asdf")
    // this.user.controls.isAdmin.setValue("asdf")
  }
}
