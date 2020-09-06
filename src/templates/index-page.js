import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import homeStyles from "../components/PageComponents/Home/home.module.css";
import Card from "react-bootstrap/Card";

import { LogoPlaceholder } from "../../../images/index";

import EstimateModal from "../../estimateModal";
import SignUpModal from "../../signupModal";

import BioButtons from "./bioLinkButtons";

import { FaFacebook, FaInstagram, FaSnapchat, FaYoutube } from "react-icons/fa";

export const IndexPageTemplate = ({
  backgroundimage,
  headimage,
  logo,
  artistname,
  artistlinks,
  socialmedia,
}) => (
  <section 
  className="sectionWrap" 
  style={{
    backgroundImage:`url(${
        !!backgroundimage.childImageSharp ? backgroundimage.childImageSharp.fluid.src : backgroundimage
      })`,
  }}>
    <Container>
      <Row>
        <Col>
          <Fade ssrReveal>
            <Card className={homeStyles.CardStyle}>
              <Card.Img 
              variant="top" 
              className={homeStyles.bannerPhoto}
              style={{
                  backgroundImage:{headimage}
              }} />

              <Card.Body>
                <div className={homeStyles.frontText}>
                  <Card.Title className={homeStyles.frontTextHeader}>
                    <div className="w-100">
                      <img
                        src={logo}
                        className={homeStyles.LogoWords}
                      />
                    </div>
                  </Card.Title>
                  <Card.Text>
                    <Row>
                      <Col>
                        <a href="https://facebook.com/">
                          <FaFacebook
                            id="socialiconspace"
                            style={{ fill: "black" }}
                          />
                        </a>

                        <a href="https://instagram.com/">
                          <FaInstagram
                            id="socialiconspace"
                            style={{ fill: "black" }}
                          />
                        </a>

                        <a href="https://snapchat.com/">
                          <FaSnapchat
                            id="socialiconspace"
                            style={{ fill: "black" }}
                          />
                        </a>

                        <a href="https://youtube.com/">
                          <FaYoutube
                            id="socialiconspace"
                            style={{ fill: "black" }}
                          />
                        </a>
                      </Col>
                    </Row>
                    <BioButtons />
                  </Card.Text>
                </div>
              </Card.Body>
              <Card.Footer>
                <SignUpModal />
                <span className="divider" />
                <EstimateModal />
              </Card.Footer>
            </Card>
          </Fade>
        </Col>
      </Row>
    </Container>
  </section>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        backgroundimage={frontmatter.backgroundimage}
        headimage={frontmatter.headimage}
        logo={frontmatter.logo}
        artistname={frontmatter.artistname}
        artistlinks={frontmatter.artistlinks}
        socialmedia={frontmatter.socialmedia}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        backgroundimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        headimage {
          childImageSharp {
            fluid(maxHeight: 250, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logo
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
