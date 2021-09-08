import React from "react";
import home from "../img/home.jpg";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>Come with me</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>to a world of </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              {" "}
              <span>imagination</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <p>Get In Contact for any of your photography needs</p>
        <button>Contact</button>
      </Description>
      <Image>
        <img src={home} alt="camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
