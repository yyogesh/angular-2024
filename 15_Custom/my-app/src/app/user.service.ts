import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from './constant';
import { Observable } from 'rxjs';
import { IUser } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(Constant.apiURL);
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${Constant.apiURL}/${id}`);
  }


  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(Constant.apiURL, user, { headers: {Authorization: 'test'} });
  }

  updateUser(id: number, user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${Constant.apiURL}/${id}`, user);
  }

  deleteUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${Constant.apiURL}/${id}`);
  }
}
