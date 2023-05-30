import * as React from "react";
import { container, heading } from "./Layout.module.css";

const Layout = ({ pageTitle }) => {
  return (
    <div className={container}>
      <nav>
        <h1 className={heading}>{pageTitle}</h1>
      </nav>
    </div>
  );
};

export default Layout;
