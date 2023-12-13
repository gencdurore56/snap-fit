/*
 * Filename: complexCode.js
 * 
 * Description: 
 * This code demonstrates a complex implementation of a library management system using JavaScript.
 * It includes classes for books, users, and the library itself. The code enables users to borrow and return books, 
 * keep track of overdue books, and calculate fines.
 * 
 * Note: This is a simplified implementation and does not include error handling or advanced features like authentication.
 */

// Class representing a Book
class Book {
  constructor(title, author, genre, totalCopies, availableCopies) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.totalCopies = totalCopies;
    this.availableCopies = availableCopies;
  }

  borrowBook() {
    if (this.availableCopies > 0) {
      this.availableCopies--;
      console.log(`"${this.title}" by ${this.author} borrowed successfully.`);
    } else {
      console.log(`Sorry, "${this.title}" is not available at the moment.`);
    }
  }

  returnBook() {
    if (this.availableCopies < this.totalCopies) {
      this.availableCopies++;
      console.log(`"${this.title}" returned successfully.`);
    } else {
      console.log(`"${this.title}" is already returned.`);
    }
  }
}

// Class representing a User
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.borrowedBooks = [];
  }

  borrowBook(library, bookTitle) {
    const book = library.findBookByTitle(bookTitle);

    if (book) {
      book.borrowBook();
      this.borrowedBooks.push(book);
    } else {
      console.log(`"${bookTitle}" not found in the Library.`);
    }
  }

  returnBook(library, bookTitle) {
    const bookIndex = this.borrowedBooks.findIndex(
      (book) => book.title === bookTitle
    );

    if (bookIndex !== -1) {
      const book = this.borrowedBooks[bookIndex];
      book.returnBook();
      this.borrowedBooks.splice(bookIndex, 1);
    } else {
      console.log(`You have not borrowed "${bookTitle}" from the Library.`);
    }
  }
}

// Class representing the Library
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`"${book.title}" added to the Library.`);
  }

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }

  getAvailableBooks() {
    return this.books.filter((book) => book.availableCopies > 0);
  }

  getOverdueBooks() {
    const currentDate = new Date();
    return this.books.filter(
      (book) =>
        book.availableCopies < book.totalCopies &&
        book.dueDate < currentDate
    );
  }

  calculateFine(book) {
    const currentDate = new Date();
    const daysLate = Math.floor((currentDate - book.dueDate) / (1000 * 3600 * 24));
    const fineAmount = daysLate * 0.5; // Fine of $0.5 per day

    console.log(`Fine for "${book.title}" is $${fineAmount.toFixed(2)}.`);
  }
}

// Usage example

const library = new Library("My Library");

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic", 5, 5);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Novel", 3, 3);
const book3 = new Book("1984", "George Orwell", "Dystopian", 10, 10);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const user1 = new User("John", "john@example.com");
const user2 = new User("Jane", "jane@example.com");

user1.borrowBook(library, "The Great Gatsby");
user2.borrowBook(library, "1984");

user1.returnBook(library, "The Great Gatsby");

console.log(`Available Books in ${library.name}:`, library.getAvailableBooks());
console.log(`Overdue Books in ${library.name}:`, library.getOverdueBooks());