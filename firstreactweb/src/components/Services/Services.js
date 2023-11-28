import React from "react";
import "./Services.css";
import { AiFillCar } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";

const Services = () => {
  return (
    <div className="mainServiceContainer">
      <div className="desContainer">
        <p className="desHeading">We Provide Awesome<br></br>
        <span className="desHeading" style={{ color: "#195776" }}>
          Services
        </span>
        </p>
      </div>
      <div className="iconContainer">
      <AiFillCar className="servicesIcon"/>
      <FaRegHandshake />

      </div>
    </div>
  );
};

export default Services;
