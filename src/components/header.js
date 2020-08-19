import React from "react";
//import { Link } from "gatsby";
import PropTypes from "prop-types";
//import { Button, Navbar, Nav, NavItem } from "react-bootstrap";
import Embed from "react-song-embed";

const Header = ({ siteTitle }) => (
  <>
    <Embed
      /*rel="preload"*/
      SameSite="none"
      url="https://album.link/kZhtWN9bm34Gc"
      height={52}
      dark
      style={{
        display: "fixed",
        position: "relative",
        zIndex: "20",
      }}
    />
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
