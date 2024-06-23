import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private existingUsers = ['ABC', 'XYZ', 'PQR'] // database user

  constructor(private httpClient: HttpClient) { }

  checkIfUserExists(user: string) { // observable true / false
    return of(this.existingUsers.some(x => x === user)).pipe(
      delay(1000)
    );
  }

  searchUsers(user: string) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users?username=${user}`);
  }

  // axios // fetch // any other // angular httpclient
}
