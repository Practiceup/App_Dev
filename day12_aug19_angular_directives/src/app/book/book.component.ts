import { Component } from '@angular/core';
import { BookRepository } from './repository.model';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  model: BookRepository = new BookRepository();
  books: any;

  addBook() {
    this.model.addBook(new Book(4, 'Kids Science', 'National Geographic', 56));
  }

  deleteBook(book: Book) {
    this.model.deleteBook(book);
  }

  updateName(book: Book) {
    book.name = 'UPDATED NAME';
  }

  updatePrice(book: Book) {
    book.price = 88;
  }
}
