import { Component } from '@angular/core';
import { UserInteractionService } from '../user-interaction.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  constructor(private _userInteractionService: UserInteractionService){
    this._userInteractionService.userInfo$.subscribe((updatedUser) => {
      console.log('User profile updated:', updatedUser);
    });

    this._userInteractionService.userAccountInfo$.subscribe((updatedUser) => {
      console.log('User Account updated:', updatedUser);
    });
  }
}
