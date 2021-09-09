import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { motion } from "framer-motion";
import { pageAnimation, photoAnim } from "../animation";
import { fade } from "../animation";
import { useScroll } from "../components/useScroll";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <motion.img variants={photoAnim} src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie variants={fade} animate={controls} initial="hidden" ref={element}>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <motion.img variants={photoAnim} src={theracer} alt="racer" />
        </Link>
      </Movie>
      <Movie
        variants={fade}
        animate={controls2}
        initial="hidden"
        ref={element2}
      >
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <motion.img variants={photoAnim} src={goodtimes} alt="goodtime" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
