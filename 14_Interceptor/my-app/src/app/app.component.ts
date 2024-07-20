import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-app';
  userService = inject(UserService)

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      console.log(users)
    })
  }
}
