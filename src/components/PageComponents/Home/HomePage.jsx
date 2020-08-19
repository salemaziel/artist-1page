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
      <Row>
        <Col className="NoMobile"  xs={3} />
        <Col>
        <Fade ssrFadeout>

            <HomeCard />
            </Fade>

        </Col>
        <Col className="NoMobile" xs={3}/>
      </Row>
    </Container>
    </section>
  </>
);

export default HomePage;
