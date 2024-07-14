import { Component } from '@angular/core';
import { UserInteractionService } from '../user-interaction.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  constructor(private _userInteractionService: UserInteractionService){
    this._userInteractionService.userInfo$.subscribe((updatedUser) => {
      console.log('User profile updated:', updatedUser);
    });
  }
}
