import React from "react";
import { graphql, StaticQuery } from 'gatsby';
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
  FaYoutube,
} from "react-icons/fa";


import { SiTiktok } from 'react-icons/si';


const HomeCard = ({data}) => (
  
  <Card className={homeStyles.CardStyle}>
    
    <Card.Img variant="top"  className={homeStyles.bannerPhoto} style={{"backgroundImage":`url('${data.siteYaml.top_photo}')`}}  />
    {/*<div className={homeStyles.LogoBox}>
        <img src={LogoHelmet1_jpg} className={homeStyles.Logo} />
</div>*/}
    <Card.Body>
      <div className={homeStyles.frontText}>
        <Card.Title className={homeStyles.frontTextHeader}>
          <div className="w-100">
            <img src={data.siteYaml.logo_image} className={homeStyles.LogoWords} />
          </div>
        </Card.Title>
        <Card.Text>
          {/*<div style={{ margin: "1rem auto 0"}} >*/}
          {/*<p className={homeStyles.frontTextBody}>Artist BioLink</p>*/}
          <Row>
            <Col>
              <a href={data.siteYaml.facebook_link}>
                <FaFacebook id="socialiconspace" style={{fill: 'black'}}/>
              </a>

              <a href={data.siteYaml.instagram_link}>
                <FaInstagram id="socialiconspace" style={{fill: 'black'}}/>
              </a>

              <a href={data.siteYaml.snapchat_link}>
                <FaSnapchat id="socialiconspace" style={{fill: 'black'}}/>
              </a>

              {/*<a href={data.siteYaml.youtube_link}>
                <FaYoutube id="socialiconspace" style={{fill: 'black'}}/>
</a>*/}
              <a href={data.siteYaml.tiktok_link}>
                <SiTiktok id="socialiconspace" style={{fill: 'black'}}/>
              </a>
            </Col>
          </Row>
         {/*} </div>*/}
          <BioButtons  data={data}/>
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
let indexQuery = graphql`
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


export default (props)=> (<StaticQuery query={indexQuery} render={data => (
  <HomeCard  data={data}  />
)}></StaticQuery>);
