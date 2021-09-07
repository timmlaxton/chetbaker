import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";

const About = () => {
  return (
    <Abouts>
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
    </Abouts>
  );
};

const Abouts = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default About;
