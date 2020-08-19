import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HomePage from '../components/PageComponents/Home/HomePage'

const IndexPage = () => (
  <Layout>
    <SEO title="Artist Promotion Demo" />
    <HomePage />

  </Layout>
);

export default IndexPage;
