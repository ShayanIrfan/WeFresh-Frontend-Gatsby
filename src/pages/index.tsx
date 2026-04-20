import * as React from "react";
import Header from "../containers/Header";
import Footer from '../containers/Footer';
import Home from '../sections/Home';
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>{data.site.siteMetadata.title}</title>
  )
}
