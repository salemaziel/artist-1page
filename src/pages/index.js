import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HomePage from '../components/PageComponents/Home/HomePage'

const IndexPage = () => (
  <Layout>
    <SEO title="Spartan Plumbing Services and Repairs" />
    <HomePage />

  </Layout>
);

export default IndexPage;
