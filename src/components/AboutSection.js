import React from "react";
import home from "../img/home.jpg";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Come with me</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>to a world of </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              {" "}
              <span>imagination</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Get In Contact for any of your photography needs
        </motion.p>
        <motion.button variants={fade}>Contact</motion.button>
      </Description>
      <Image>
        <img src={home} alt="camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
