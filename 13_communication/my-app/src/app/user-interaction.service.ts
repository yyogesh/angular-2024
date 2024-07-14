import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInteractionService {

  private userInfo = new Subject<string>();
  public userInfo$ = this.userInfo.asObservable()

  private userAccountInfo = new BehaviorSubject<number>(1000);
  public userAccountInfo$ = this.userAccountInfo.asObservable()

  constructor() { }

  public setUserInfo(userInfo: string) {
    console.log('Setting user info:', userInfo);  // For demonstration purposes only. In a real-world scenario, you might want to handle this differently.
    this.userInfo.next(userInfo);
  }

  public setUserAccount(amount: number) {
    this.userAccountInfo.next(amount);
  }
}
