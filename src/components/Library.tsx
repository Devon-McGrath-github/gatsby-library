import React, { useState } from "react";
// import LibraryCSS

let initialLibrary: Array<object> = [
  { title: "test", author: "author", pages: 300, readStatus: "read" },
];

// book constructor
class Book {
  title?: string;
  author?: string;
  pages?: number;
  readStatus?: string;
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

  const [titleText, setTitleText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [pageCount, setPageCount] = useState<null | number>(null);

  // update checkbox
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    // setChecked(!checked);
  };

  // Create new books and add them to the array
  //    --replace with modal that has input fields
  function addBookToLibrary() {
    let readStatus = checked ? "Read" : "Unread";

    const newBook = new Book(titleText, authorName, pageCount, readStatus);

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
      {/* <button onClick={addBookToLibrary}>Add Book</button> */}
      <form onSubmit={addBookToLibrary}>
        <label htmlFor="title">Add Book:</label>
        <input
          type="text"
          id="title"
          value={titleText}
          placeholder="Title"
          onChange={(e) => setTitleText(e.target.value)}
        />
        <input
          type="text"
          id="author"
          value={authorName}
          placeholder="Author"
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <input
          type="number"
          id="pageCount"
          placeholder="Pages"
          value={pageCount}
          onChange={(e) => setPageCount(e.target.value)}
        />
        <label htmlFor="readStatus">Have you read it?</label>
        <input
          type="checkbox"
          id="readStatus"
          value={checked}
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>

      {libraryItems}
    </div>
  );
};

export default Library;
