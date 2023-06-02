import React, { useState } from "react";
import FormModal from "./FormModal";
import {
  contentWrapper,
  grid,
  formModal,
  modalOverlay,
  form,
  card,
  cardContent,
  readStatus,
  addBookBtn,
} from "./Library.module.css";

const INITIAL_LIBRARY: Array<object> = [
  { title: "test", author: "author", pages: 300, readStatus: "read" },
];
const INITIAL_TITLE: string = "";
const INITIAL_AUTHOR: string = "";
const INITIAL_PAGECOUNT: number | null = null;
const INITIAL_CHECKBOX: boolean = false;

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
  const [myLibrary, setMyLibrary] = useState(INITIAL_LIBRARY);

  const [openModal, setOpenModal] = useState(false);
  const Toggle = () => setOpenModal(!openModal);

  const [titleText, setTitleText] = useState(INITIAL_TITLE);
  const [authorName, setAuthorName] = useState(INITIAL_AUTHOR);
  const [pageCount, setPageCount] = useState<null | number>(INITIAL_PAGECOUNT);

  // update checkbox
  const [checked, setChecked] = React.useState(INITIAL_CHECKBOX);
  const handleChange = () => {
    setChecked(!checked);
  };

  // Create new books and add them to the array
  //    --replace with modal that has input fields
  function addBookToLibrary() {
    let status = checked ? "Read" : "Unread";

    const newBook = new Book(titleText, authorName, pageCount, status);

    setMyLibrary([newBook, ...myLibrary]);

    setTitleText(INITIAL_TITLE);
    setAuthorName(INITIAL_AUTHOR);
    setPageCount(INITIAL_PAGECOUNT);
    setChecked(INITIAL_CHECKBOX);
  }

  // book modal (if statement?? )

  const libraryItems = myLibrary.map((book) => (
    <div className={card}>
      <div className={cardContent}>
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>
        <p>{book.pages} pages</p>
        <p>{book.readStatus}</p>
      </div>
    </div>
  ));

  return (
    <div className={contentWrapper}>
      <div className={addBookBtn}>
        <button className="clickme" onClick={() => setOpenModal(!openModal)}>
          Add Book
        </button>
      </div>
      <FormModal open={openModal}></FormModal>
      <div className={formModal}>
        <form onSubmit={addBookToLibrary} className={form}>
          <label htmlFor="title">Add Book:</label>
          <input
            required
            type="text"
            id="title"
            value={titleText}
            placeholder="Title"
            onChange={(e) => setTitleText(e.target.value)}
          />
          <input
            required
            type="text"
            id="author"
            value={authorName}
            placeholder="Author"
            onChange={(e) => setAuthorName(e.target.value)}
          />
          <input
            required
            type="number"
            id="pageCount"
            placeholder="Pages"
            value={pageCount}
            onChange={(e) => setPageCount(e.target.value)}
          />
          <div className={readStatus}>
            <label htmlFor="readStatus">Have you read it?</label>
            <input
              type="checkbox"
              id="readStatus"
              value={checked}
              onChange={handleChange}
            />
          </div>
          <button onClick={addBookToLibrary}>Add Book</button>
        </form>
      </div>
      <div className={modalOverlay}></div>
      <div className={grid}>{libraryItems}</div>
    </div>
  );
};

export default Library;
