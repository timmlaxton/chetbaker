import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import audio from "../img/audioeverything-1.png";
import comics from "../img/comics-1.png";
import bellimages from "../img/bell-1.png";
import gutties from "../img/gutties-1.png";
import podcast from "../img/podcast-1.png";
import { motion } from "framer-motion";
import { pageAnimation, photoAnim } from "../animation";
import { fade } from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();
  return (
    <>
      <Work
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <Project>
          <h2>Audio Everything</h2>
          <div className="line"></div>
          <Link to="/work/audio-everything">
            <motion.img variants={photoAnim} src={audio} alt="audio" />
          </Link>
        </Project>
        <Project
          variants={fade}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <h2>City Center Comics</h2>
          <div className="line"></div>
          <Link to="/work/comics">
            <motion.img variants={photoAnim} src={comics} alt="comics" />
          </Link>
        </Project>
        <Project
          variants={fade}
          animate={controls2}
          initial="hidden"
          ref={element2}
        >
          <h2>Bell Images</h2>
          <div className="line"></div>
          <Link to="/work/bell-images">
            <motion.img variants={photoAnim} src={bellimages} alt="bell" />
          </Link>
        </Project>
        <Project
          variants={fade}
          animate={controls3}
          initial="hidden"
          ref={element3}
        >
          <h2>Gutties</h2>
          <div className="line"></div>
          <Link to="/work/gutties">
            <motion.img variants={photoAnim} src={gutties} alt="gutties" />
          </Link>
        </Project>
        <Project
          variants={fade}
          animate={controls4}
          initial="hidden"
          ref={element4}
        >
          <h2>Working Comics</h2>
          <div className="line"></div>
          <Link to="/work/podcast">
            <motion.img variants={photoAnim} src={podcast} alt="podcast" />
          </Link>
        </Project>
        <Project
          variants={fade}
          animate={controls5}
          initial="hidden"
          ref={element5}
        />

        <ScrollTop />
      </Work>
    </>
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

const Project = styled(motion.div)`
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
