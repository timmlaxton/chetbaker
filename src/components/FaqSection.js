import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { fade } from "../animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={fade} animate={controls} initial="hidden" ref={element}>
      <h2>
        <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="I need a website, can you help?">
          <div className="answer">
            <p>Yes, happily.</p>
            <p>
              I have over 2 years experience building SPA(single page sites) to
              full stack sites. Please contact me and tell me what you need.
            </p>
          </div>
        </Toggle>
        <Toggle title="Can you work with my exisiting team?">
          <div className="answer">
            <p>
              Yes, I'm happy to work with others to get what you need completed
            </p>
          </div>
        </Toggle>
        <Toggle title="What are your rates?">
          <div className="answer">
            <p>My rates depend on the size of the site</p>
            <p>
              To find out more, please get in contact and I will happily discuss
              rates.{" "}
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
