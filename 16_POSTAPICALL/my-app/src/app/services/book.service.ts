import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';
import { CreateBookDto } from '../model/CreateBookDto';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://localhost:7145/api/Books';

  constructor(private http: HttpClient) { }

  createBook(book: CreateBookDto): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
}
