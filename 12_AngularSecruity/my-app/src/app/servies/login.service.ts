import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, forkJoin, map, mergeMap, Observable, pluck, shareReplay } from 'rxjs';

interface IUser {
  id: number;
  name: string;
  username: string;
  address: any;
  email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login() {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`).pipe(
      filter(users => !!users),
      map(
        (users) => (users as IUser[]).map(user =>user.name)
      ))
  }

  login1() {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`).pipe(
      pluck('name'),
      shareReplay({
        bufferSize: 1,
        refCount: true
      })
    )
  }

  getData() {
    const request1 = this.http.get('api/data1');
    const request2 = this.http.get('api/data2');
    const request3 = this.http.get('api/data3');

    return forkJoin([request1, request2, request3]).subscribe(
      ([data1, data2, data3]) => {
        console.log(data1, data2, data3);
        // Process the results here
      },
      error => console.error('An error occurred', error)
    );
  }

  getUserPosts(userId: number): Observable<any> {
    return this.http.get<any>(`/api/users/${userId}`).pipe(
      mergeMap(user => this.http.get<any>(`/api/posts?userId=${user.id}`))
    );
  }

  // api call ==> result  ==> api call 
}
