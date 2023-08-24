import { Book } from './book.model';

export class dataSource {
  private books: Book[];

  constructor() {
    this.books = new Array<Book>(
      new Book(1, 'Awesome Kitchen Experiments', 'Megan Hall', 36),
      new Book(2, 'General Science', 'Sherwin, Faulkner Oard', 110),
      new Book(3, 'Hello from planet earth', 'Gusto', 16)
    );
  }
  getBooks(): Book[] {
    return this.books;
  }
}
