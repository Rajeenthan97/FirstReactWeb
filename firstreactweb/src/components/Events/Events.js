import React from "react";
import "./Events.css";
import CustomButton from "../CustomButton/CustomButton";

const Events = () => {
  return (
    <div className="mainEventContainer">
      <div className="eventContainer">
        <div className="events">
          <div className="eventDesBox">
            <div className="subEventBox">
              <p className="subEventBoxText">
                10.00 am - 12.00 pm <br></br>
                November 30, 2023
              </p>
            </div>
            <div className="subEventDes">
              <p className="subEventDesHeading">
                Community Gathering and Updates
              </p>
              <p className="subEventDesText">
                Join us for a community meeting where we will discuss important
                updates, upcoming events, and gather feedback from members.
              </p>
            </div>
          </div>
        </div>
        <div className="events">
          <div className="eventDesBox">
            <div className="subEventBox2">
              <p className="subEventBoxText">
                10.00 am - 12.00 pm <br></br>
                December 10, 2023
              </p>
            </div>
            <div className="subEventDes">
              <p className="subEventDesHeading">
                Neighborhood Improvement Forum
              </p>
              <p className="subEventDesText">
                Let's come together to discuss potential improvements for our
                neighborhood. This forum will cover topics such as
                beautification projects, safety concerns, and upcoming community
                events.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="eventDesContainer">
        <p className="eventDesHeading">
          Featured upcoming
          <span style={{ color: "#195776" }}> Events</span>
        </p>

        <p className="eventDesText">Explore our featured upcoming events</p>
        <CustomButton type="submit" label="Learn more"/>

      </div>
    </div>
  );
};

export default Events;
