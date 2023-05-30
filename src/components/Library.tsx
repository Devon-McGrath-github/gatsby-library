import * as React from "react";

let myLibrary: Array<object> = [];

// book constructor
class Book {
  title: string;
  author: string;
  pages: number;
  readStatus: string;

  constructor(
    theTitle: string,
    theAuthor: string,
    pageCount: number,
    theReadStatus: string
  ) {
    this.title = theTitle;
    this.author = theAuthor;
    this.pages = pageCount;
    this.readStatus = theReadStatus;
  }
}

// Create new books and add them to the array
function addBookToLibrary() {
  let title = prompt("title");
  let author = prompt("author");
  let pageCount = prompt("page count");
  let readStatus = prompt("have you read this?");

  const newBook = new Book(title, author, pageCount, readStatus);

  myLibrary.push(newBook);
  console.log(myLibrary);
}

const Library = () => {
  return (
    <div>
      <h1>test</h1>
      <button onClick={addBookToLibrary}>Add Book</button>
    </div>
  );
};

export default Library;
