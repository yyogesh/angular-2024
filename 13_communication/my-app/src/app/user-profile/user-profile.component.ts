import { Component } from '@angular/core';
import { UserInteractionService } from '../user-interaction.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [UserDetailComponent, UserListComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  providers: [] // no need to inject services here as they are already provided by the parent component
})
export class UserProfileComponent {
  constructor(private _userInteractionService: UserInteractionService){
    console.log("User profile")
    this._userInteractionService.userInfo$.subscribe((updatedUser) => {
      console.log('User profile updated:', updatedUser);
    });

    this._userInteractionService.userAccountInfo$.subscribe((updatedUser) => {
      console.log('User Account updated:', updatedUser);
    });
  }
}
