import { Component } from '@angular/core';
import { AuthService } from '../../servies/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService: AuthService) {
   // this.authService.login()
  }
}
