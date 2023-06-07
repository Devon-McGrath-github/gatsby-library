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
  { id: "ID", title: "title", author: "author", readStatus: "read" },
];
const INITIAL_TITLE: string = "";
const INITIAL_AUTHOR: string = "";
const INITIAL_CHECKBOX: boolean = false;

// book constructor
class Book {
  id: UUID;
  title?: string;
  author?: string;
  readStatus?: string;
  constructor(theTitle: string, theAuthor: string, theReadStatus: string) {
    (this.id = self.crypto.randomUUID()), (this.title = theTitle);
    this.author = theAuthor;
    this.readStatus = theReadStatus;
  }
}

const Library = () => {
  const [myLibrary, setMyLibrary] = useState(INITIAL_LIBRARY);

  const [openModal, setOpenModal] = useState(false);

  const [titleText, setTitleText] = useState(INITIAL_TITLE);
  const [authorName, setAuthorName] = useState(INITIAL_AUTHOR);

  // update checkbox
  const [checked, setChecked] = React.useState(INITIAL_CHECKBOX);
  const handleChange = () => {
    setChecked(!checked);
  };

  // Create new books and add them to the array
  //    --replace with modal that has input fields
  function addBookToLibrary() {
    let status = checked ? "Read" : "Unread";

    const newBook = new Book(titleText, authorName, status);

    setMyLibrary([newBook, ...myLibrary]);

    setTitleText(INITIAL_TITLE);
    setAuthorName(INITIAL_AUTHOR);
    setChecked(INITIAL_CHECKBOX);
  }

  // book modal (if statement?? )

  const libraryItems = myLibrary.map((book) => (
    <div className={card}>
      <div className={cardContent}>
        <h3>{book.id}</h3>
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>
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
