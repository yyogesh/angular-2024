import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadInitData() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }
}
