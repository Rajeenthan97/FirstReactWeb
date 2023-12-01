import React from "react";
import "./ContactUs.css";
import CustomInput from "../Custom_Input/CustomInput";
import CustomTextArea from "../Custom_Input/CustomTextArea";
import messageIcon from "../../Icons/messageIcon.png";
import callIcon from "../../Icons/callIcon.png";
import locationIcon from "../../Icons/locationIcon.png";
import CustomButton from "../CustomButton/CustomButton";


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
      
    </div>
  );
};

export default ContactUs;
