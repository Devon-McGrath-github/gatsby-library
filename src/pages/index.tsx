import * as React from "react";
import Layout from "../components/Layout";
import Library from "../components/Library";
import "./index.css";

const PAGETITLE: string = "Javascript Layout";

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle={PAGETITLE}></Layout>
      <Library></Library>
    </div>
  );
};

export const Head = () => <title>{PAGETITLE}</title>;

export default IndexPage;
