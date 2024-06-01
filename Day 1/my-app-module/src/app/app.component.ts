import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app-module';
  isDisabled = false;
  badString= "Hello <script>alert('Hacked');</script> World!";
  htmlString = '<h1>Hello World!</h1>';
  status = 'error big-font';
  isApplyStatus = true;
  googleImageUrl = 'https://www.google.com/logos/doodles/2024/2024-icc-mens-t20-world-cup-6753651837110521.2-l.png'
  user = { // Object
    name: 'John',
    surname: 'Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: 12345
    }
  }

  users = [
    {
    name: 'John',
    surname: 'Doe',
    age: 30,
  }, 
  {
    name: 'John1',
    surname: 'Doe1',
    age: 30,
  }
]

btnClass = {
  'btn': true,
  'btn-primary': true,
  'disabled': this.isDisabled
}

style = {
  'font-weight': 'bold',
  color: this.isDisabled ? '#FFFFFF' : '#000000',
}

  getUserInfo() {
    const userInfo = `GetUserInfo ${this.user.name} "" $$ ''  @@ ${this.user.surname}`;
    // userInfo += "afd";
    // var // let // const
    return userInfo;
  }

  getButtonClass() {
    return {
      'btn': true,
      'btn-primary': true,
      'disabled': this.isDisabled
    }
  }

  onEventClick() {
    this.isDisabled = !this.isDisabled;
  }

  onInputKeyDown(event: any) {
    console.log(event);
  }

  onInputChange(event: any) {
    this.title = event.target.value;
  }
}
