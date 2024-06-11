import { Injectable } from '@angular/core';
import { USER_DATA } from './data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly httpClient: HttpClient) { }

  getUserData() {
    return USER_DATA;
  }

  getUserDataFromAPI(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
