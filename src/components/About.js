import React from "react";
import home1 from "../img/home1.png";

const About = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Come with me</h2>
          </div>
          <div className="hide">
            <h2>to a world of </h2>
          </div>
          <div className="hide">
            <h2>
              {" "}
              pure <span>imagination</span>
            </h2>
          </div>
        </div>
        <p>Get In Contact for any of your photography needs</p>
        <button>Contact</button>
      </div>
      <div className="image">
        <img src={home1} alt="camera" />
      </div>
    </div>
  );
};

export default About;
