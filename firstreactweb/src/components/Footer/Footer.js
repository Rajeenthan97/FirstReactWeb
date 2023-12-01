import React from 'react'
import "./Footer.css";
import logo from "../../Images/logo.png";
import socialMediaIcon from "../../Icons/socialMediaIcon.png";

const Footer = () => {
  return (
    <div className="contactFooterContainer">
    <div className="subContactFooterContainer">
      <div className="logoContainer">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="socialMediaContainer">
        <p className="footerHeading">Follow us</p>
        <img
          className="socialMediaIcon"
          src={socialMediaIcon}
          alt="socialMediaIcon"
        />
      </div>
      <div className="linksContainer">
        <p className="footerHeading">Useful Links</p>
        <ul className="desText">
         <p><li >Our Projects</li></p> 
          <p><li>FAQ’s</li></p>
          <p><li>News and Updates</li></p>
        </ul>
      </div>
      <div className="contactsContainer">
        <p className="footerHeading">Contacts</p>
        <p className="desText">
          <p className="desText"> Address : 4-5 Main road ,Delhi</p>
          <p className="desText"> Email : educare@gmail.com Phone</p>
          <p className="desText"> Number : +91 4533433265</p>
        </p>
      </div>
    </div>
    <div className="copyrightContainer">
        <p className="desText">All Copyrights reserved</p>
      </div>
  </div>
  )
}
export default Footer