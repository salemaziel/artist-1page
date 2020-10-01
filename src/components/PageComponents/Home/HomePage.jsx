import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeCard from './HomeCard'
import Fade from "react-reveal/Fade";






const HomePage = () => (
  <>
  <section className="sectionWrap">
    <Container >
      <Row className="justify-content-center">
        <Col /*xs={12}*/ sm={6} /*md={4}*/ >
        <Fade ssrFadeout>

            <HomeCard />
            </Fade>

        </Col>
      </Row>
    </Container>
    </section>
  </>
);

export default HomePage;
