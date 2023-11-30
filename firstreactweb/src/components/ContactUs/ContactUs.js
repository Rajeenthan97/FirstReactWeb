import React from "react";
import "./ContactUs.css";
import CustomInput from "../Custom_Input/CustomInput";
import CustomTextArea from "../Custom_Input/CustomTextArea";
import messageIcon from "../../Icons/messageIcon.png";
import callIcon from "../../Icons/callIcon.png";
import locationIcon from "../../Icons/locationIcon.png";
import CustomButton from "../CustomButton/CustomButton";
import logo from "../../Images/logo.png";
import socialMediaIcon from "../../Icons/socialMediaIcon.png";

const ContactUs = () => {
  return (
    <div className="mainContainer">
      <div className="mainContactContainer">
        <div className="contactDesContainer">
          <p className="contactDesHeading">
            Fill the form to
            <span style={{ color: "#195776" }}> Contact us.</span>
          </p>
          <p className="contactDes">Connect with us effortlessly</p>
          <br></br>
          <div className="iconDesContainer">
            <img className="contactIcon" src={messageIcon} alt="messageIcon" />
            <p className="iconDes">sample@gmail.com</p>
          </div>

          <div className="iconDesContainer">
            <img className="contactIcon" src={callIcon} alt="callIcon" />
            <p className="iconDes">+94771234567</p>
          </div>

          <div className="iconDesContainer">
            <img
              className="contactIcon"
              src={locationIcon}
              alt="locationIcon"
            />
            <p className="iconDes">sample@gmail.com</p>
          </div>
        </div>
        <div className="inputBoxContainer">
          <div className="subInputBoxContainer">
            <CustomInput placeholder="Your name" />
            <CustomInput placeholder="Email Address" />
            <CustomInput placeholder="Contact No" />
            <CustomTextArea placeholder="Message" />
            <CustomButton type="submit" label="Submit" />
          </div>
        </div>
      </div>
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
          <div className="copyrightContainer">
            {/* <p>All Copyrights reserved</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
