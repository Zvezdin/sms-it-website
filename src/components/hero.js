import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"
import smmsItIllustration from "../images/sms-it-illustration.png"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>SMS It</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      Smart Chatbots For Everyone
    </p>
    <div style={{ margin: 60, width: `80%`, position: "relative" }}>
      <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
        <img src={smmsItIllustration}></img>
      </div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          top: 0,
        }}
      >
      </div>
    </div>
    <h2 style={{paddingBottom: "4em"}}>We provide you with the infrastructure to convert any voice and chat bot into an SMS bot. </h2>
    <Link to="/project/index.html" style={{marginBottom: "0em"}}>
      <Button>Open Main Website</Button>
    </Link>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
