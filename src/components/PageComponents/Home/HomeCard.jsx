import React from "react";
import homeStyles from "./home.module.css";
import Card from "react-bootstrap/Card";

import {
  Bg_jpg,
  LogoHelmet1_jpg,
  LogoWords1_png,
  LogoPlaceholder,
} from "../../../images/index";

import { MdLocationOn } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";

import EstimateModal from "../../estimateModal";

import BioButtons from './bioLinkButtons'

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
          <div style={{margin: '2rem auto'}} />
          <p className={homeStyles.frontTextBody}>
            Artist BioLink
          </p>
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
      <a href="tel:6194831212">
        <FaEnvelope color="darkgray" className={homeStyles.Icon} /> Sign up For Updates
      </a>
      <span className="divider" />
      <EstimateModal />
    </Card.Footer>
  </Card>
);

export default HomeCard;
