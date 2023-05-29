import * as React from "react";
import { container, heading } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <h1 className={heading}>{pageTitle}</h1>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
