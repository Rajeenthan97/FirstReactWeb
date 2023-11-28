import React from "react";
import "./Home.css";
import welcomeImage from "../Images/welcomeImage.png";
import ObjectiveImage from "../Images/ObjectiveImage.png";
import CustomButton from "../components/CustomButton/CustomButton";
import Services from "../components/Services/Services";

const Home = () => {
  console.log("home-----------------");

  return (
    <div className="WelcomeContainer">
      <div className="RowContainer">
        <div className="SubContainer">
          <p className=" welcomeHeading"> Welcome to our</p>
          <p className="welcomeHeading" style={{ color: "#195776"}}>
            community
          </p>
          <p className="welcomeDes">
            {" "}
            Our association takes pride in creating a supportive and engaging
            environment where seniors can come together, share experiences, and
            participate in meaningful activities.
          </p>
          <CustomButton type="submit" label="Show more" />
        </div>
        <div className="welcomeImageContainer">
          <img className="welcomeImage" src={welcomeImage} alt="Welcome" />
        </div>
      </div>
      <div className="ObjectiveMainContainer">
        <div className="ObjectiveImageContainer">
          <img
            className="ObjectiveImage"
            src={ObjectiveImage}
            alt="Objective"
          />
        </div>
        <div className="ObjectiveContainer">
          <p className="ObjectiveHeading">Objective</p>
          <ui>
            <p className="objectiveList">
            <li>Start learning from your experience</li>
            <li>Enhance your skills with us now</li>
            <li>Do your favorite course</li>
            </p>
          </ui>
          <CustomButton type="submit" label="Learn more"/>
        </div>
      </div>
      <Services/>
    </div>
  );
};

export default Home;
