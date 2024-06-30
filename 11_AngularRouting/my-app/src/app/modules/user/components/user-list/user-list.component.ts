import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  constructor(private router: Router) {}
  onUserReviewClick() {
    this.router.navigate(['/user/user-list/user-review'], { queryParams: {id: 1, name: 'ravi'}}); 
  }

  onUserDetailClick() {
    this.router.navigate(['/user/user-list/user-detail', '123', '456']); 
  }
}
