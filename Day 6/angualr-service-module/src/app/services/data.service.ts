import { Injectable } from '@angular/core';
import { USER_DATA } from './data';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, interval, map, of, retry, throwError } from 'rxjs';
import { IMapTodo, ITodo, IUser } from '../model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly httpClient: HttpClient, private _snackBar: MatSnackBar) { }

  getUserData() {
    return USER_DATA;
  }

  getUserDataFromAPI(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  getTodoDataFromAPI(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
  }


  getTodoMapDataFromAPI(): Observable<IMapTodo[]> {
    return this.httpClient.get<IMapTodo[]>('https://jsonplaceholder.typicode.com/asdf').pipe(
      retry(3),
      map(todo => {
        console.log(todo);
        return todo.map(x => ({ id: x.id, title: x.title })) //({id: todo.id, title: todo.title})
      }),
      catchError(error => this.catchError(error)),
    );
  }

  catchError(error: any): Observable<any> {
    console.log(error);
    this.openSnackBar(error.message, 'Close');
    // return throwError(error);
   return of([]);
  }

  getCountryList(): Observable<string[]> {
    return of([
      "Afghanistan",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",])
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
