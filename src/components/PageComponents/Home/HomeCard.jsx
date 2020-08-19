import React from "react";
import homeStyles from "./home.module.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  LogoPlaceholder,
} from "../../../images/index";


import EstimateModal from "../../estimateModal";
import SignUpModal from "../../signupModal";

import BioButtons from "./bioLinkButtons";

import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaYoutube
} from "react-icons/fa";

const HomeCard = () => (
  <Card className={homeStyles.CardStyle}>
    <Card.Img variant="top" className={homeStyles.bannerPhoto} />
    {/*<div className={homeStyles.LogoBox}>
        <img src={LogoHelmet1_jpg} className={homeStyles.Logo} />
</div>*/}
    <Card.Body>
      <div className={homeStyles.frontText}>
        <Card.Title className={homeStyles.frontTextHeader}>
          <div className="w-100">
            <img src={LogoPlaceholder} className={homeStyles.LogoWords} />
          </div>
        </Card.Title>
        <Card.Text>
          {/*<div style={{ margin: "1rem auto 0"}} >*/}
          {/*<p className={homeStyles.frontTextBody}>Artist BioLink</p>*/}
          <Row>
            <Col>
              <a href="https://facebook.com/">
                <FaFacebook id="socialiconspace" style={{fill: 'black'}}/>
              </a>

              <a href="https://instagram.com/">
                <FaInstagram id="socialiconspace" style={{fill: 'black'}}/>
              </a>

              <a href="https://snapchat.com/">
                <FaSnapchat id="socialiconspace" style={{fill: 'black'}}/>
              </a>

              <a href="https://youtube.com/">
                <FaYoutube id="socialiconspace" style={{fill: 'black'}}/>
              </a>
            </Col>
          </Row>
         {/*} </div>*/}
          <BioButtons />
          {/*<p className={homeStyles.frontTextBody}>
            {" "}
            Lorem ipsum dolor sit amet
          </p>
<p className={homeStyles.frontTextBody}>Lorem ipsum dolor sit amet</p>*/}
        </Card.Text>
      </div>
    </Card.Body>
    <Card.Footer>
      {/*<a href="tel:6194831212">
        <FaEnvelope color="darkgray" className={homeStyles.Icon} /> Sign up For Updates
</a>*/}
      <SignUpModal />
      <span className="divider" />
      <EstimateModal />
    </Card.Footer>
  </Card>
);

export default HomeCard;
