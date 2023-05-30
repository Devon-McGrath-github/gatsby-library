import * as React from "react";

let myLibrary = [];

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

let harryPotter = new Book("Harry Potter", "J.K Rowling", 300, "Read");

function addBookToLibrary() {}

const Library = () => {
  return (
    <div>
      <h1>test</h1>
    </div>
  );
};

export default Library;
