import * as React from "react";
import { container, heading } from "./library.module.css";

const Library = ({ pageTitle }) => {
  return (
    <div className={container}>
      <nav>
        <h1 className={heading}>{pageTitle}</h1>
      </nav>
      <main>
        <p>test</p>
      </main>
    </div>
  );
};

export default Library;
