import React from "react";
import "./Services.css";
import { AiFillCar } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";

const Services = () => {
  return (
    <div className="mainServiceContainer">
      <div className="desContainer">
        <p className="desHeading">
          We Provide<br></br> Awesome<br></br>
          <span className="desHeading" style={{ color: "#195776" }}>
            Services
          </span>
        </p>
        <p className="servicesDes">we provide services for each meetings</p>
      </div>
      <div className="iconContainer">
        <div className="iconBackgroundContainer"></div>
        <div className="mainIconContainer">
          <div className="subIconContainer">
            <AiFillCar className="servicesIcon" />
            <p className="iconText">Hours of meeting</p>
          </div>
          <div className="subIconContainer">
            <FaRegHandshake className="servicesIcon" />
            <p className="iconText">Car Parking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
