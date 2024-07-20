import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    // Replace with actual API endpoint
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  createUsers() {
    // Replace with actual API endpoint
    return this.httpClient.post('https://jsonplaceholder.typicode.com/users', {});
  }
}
