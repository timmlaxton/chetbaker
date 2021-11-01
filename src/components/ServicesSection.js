import React from "react";
import js from "../img/javascript.svg";
import react from "../img/react.svg";
import html from "../img/html5.svg";
import css from "../img/css.svg";
import bootstrap from "../img/bootstrap.svg";
import node from "../img/nodejs.svg";
import mongo from "../img/mongo.svg";
import redux from "../img/redux.svg";
import home3 from "../img/home3.jpg";
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { fade } from "../animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <div>
      <Services
        variants={fade}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Description>
          <h2>
            <span>Languages</span> and <span>Libraries</span>
          </h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={js} alt="" />
                <h3>Javascript</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={react} alt="" />
                <h3>React</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={redux} alt="" />
                <h3>Redux</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={html} alt="" />
                <h3>HTML</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={css} alt="" />
                <h3>CSS</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={bootstrap} alt="" />
                <h3>Bootstrap</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={node} alt="" />
                <h3>NodeJS</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={mongo} alt="" />
                <h3>MongoDB</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </Description>
        {/* <Image>
          <img src={home3} alt="" />
        </Image> */}
      </Services>
    </div>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
    text-align: center;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  text-align: center;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: white;
      background: #000;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
