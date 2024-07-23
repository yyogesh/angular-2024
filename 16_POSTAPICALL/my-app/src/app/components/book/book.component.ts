import { Component } from '@angular/core';
import { Book } from '../../model/Book';
import { CreateBookDto } from '../../model/CreateBookDto';
import { BookService } from '../../services/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  newBook: CreateBookDto = { title: '', author: '', year: 0 };
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.loadBooks();
  }

  onSubmit() {
    this.bookService.createBook(this.newBook).subscribe(
      book => {
        console.log('Book created:', book);
        this.loadBooks();
        this.newBook = { title: '', author: '', year: 0 };
      },
      error => console.error('Error creating book:', error)
    );
  }

  loadBooks() {
    this.bookService.getAllBooks().subscribe(
      books => this.books = books,
      error => console.error('Error loading books:', error)
    );
  }
}
