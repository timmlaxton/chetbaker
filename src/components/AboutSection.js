import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Come with me</h2>
          </Hide>
          <Hide>
            <h2>to a world of </h2>
          </Hide>
          <Hide>
            <h2>
              {" "}
              <span>imagination</span>
            </h2>
          </Hide>
        </div>
        <p>Get In Contact for any of your photography needs</p>
        <button>Contact</button>
      </Description>
      <Image>
        <img src={home1} alt="camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
