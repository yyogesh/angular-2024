import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-form';
  userDetails = {
    email: '',
    password: ''
  }

  onSubmitUserForm(userForm: any) {
    console.log(userForm, this.userDetails);
    if(userForm.valid) {
      console.log(userForm, this.userDetails);
    }
  }
}
