import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IUser } from './model/user';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';

  users: IUser[] = [];
  newUser: IUser = {id: 0, email: '', name: ''};
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  addUser() {
    this.userService.createUser(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = {id: 0, email: '', name: ''};
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }

}
