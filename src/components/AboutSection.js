import React from "react";
import home from "../img/tim2.jpg";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Tim Laxton</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Freelance </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              {" "}
              <span>Developer</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Please get in contact with any questions
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
