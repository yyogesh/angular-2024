import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInteractionService } from './user-interaction.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { AsyncSubject, ReplaySubject } from 'rxjs';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  subject = new ReplaySubject(3); // buffer 3 values for new subscribers

  asyncSubject = new AsyncSubject();

  constructor(private _userInteractionService: UserInteractionService) {
    console.log("App Component constructor")
    this._userInteractionService.setUserInfo("Name adf")
    this._userInteractionService.setUserAccount(500)

    this.subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    this.subject.next(1);
    this.subject.next(2);
    this.subject.next(3);
    this.subject.next(4);

    this.subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    this.subject.next(5);


    this.asyncSubject.subscribe({
      next: (v) => console.log(`asyncSubject observerA: ${v}`),
    });

    this.asyncSubject.next(1);
    this.asyncSubject.next(2);
    this.asyncSubject.next(3);
    this.asyncSubject.next(4);

    this.asyncSubject.subscribe({
      next: (v) => console.log(`asyncSubject observerB: ${v}`),
    });

    this.asyncSubject.next(5);
    this.asyncSubject.complete();

  }

  onInputChange(event: any): void {
    console.log('Input changed', event.target.value);
    this._userInteractionService.setUserInfo(event.target.value)

    this._userInteractionService.setUserAccount(Number(event.target.value))
  }
}
