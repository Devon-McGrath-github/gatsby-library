import * as React from "react";
import { Link } from "gatsby";
import { container } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <h1>{pageTitle}</h1>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
