import React, { useState } from "react";

let initialLibrary: Array<object> = [
  { title: "test", author: "author", pages: 300, readStatus: "read" },
];

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

const Library = () => {
  const [myLibrary, setMyLibrary] = useState(initialLibrary);

  // Create new books and add them to the array
  //    --replace with modal that has input fields
  function addBookToLibrary() {
    let title = prompt("title");
    let author = prompt("author");
    let pageCount = prompt("page count");
    let readStatus = prompt("have you read this?");

    const newBook = new Book(title, author, pageCount, readStatus);

    setMyLibrary([newBook, ...myLibrary]);
  }

  // book modal (if statement?? )

  const libraryItems = myLibrary.map((book) => (
    <div>
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <p>{book.pages} pages</p>
      <p>{book.readStatus}</p>
    </div>
  ));

  return (
    <div>
      <h1>test</h1>
      <button onClick={addBookToLibrary}>Add Book</button>
      {libraryItems}
    </div>
  );
};

export default Library;
