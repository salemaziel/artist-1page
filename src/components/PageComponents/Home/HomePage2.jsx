import React from "react";
import { graphql, StaticQuery } from 'gatsby';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeCard2 from './HomeCard2'
import Fade from "react-reveal/Fade";






const HomePage2 = ({data}) => (
  <>
  <section /*style={{"backgroundImage":`linear-gradient(
      to top,
      rgba(0, 0, 0, 0.55) 33%,
      rgba(0, 0, 0, 0.45) 66%,
      rgba(0, 0, 0, 0.25) 100%
    ),
    url('${data.siteYaml.background_photo}')`}}*/ className="sectionWrap">
    {/*<Container >
      <Row className="justify-content-center">
    <Col xs={12} sm={6} md={8} lg={6}>*/}

            <HomeCard2 />

        {/*</Col>
      </Row>
        </Container>*/}
    </section>
  </>
);
let page2Query = graphql`
  query {
    siteYaml {
      facebook_link
      apple_music_link
      background_photo
      instagram_link
      logo_image
      shop_link
      snapchat_link
      soundcloud_link
      spotify_link
      tiktok_link
      tidal_link
      top_photo
      youtube_link
      youtube_music_link
    }
  }
`;
export default  (props)=> (<StaticQuery query={page2Query} render={data => (
  <HomePage2  data={data}  />
)}></StaticQuery>);
