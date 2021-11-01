import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { projects } from "../projects";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [works, setWorks] = useState(projects);
  const [work, setWork] = useState(null);

  useEffect(() => {
    const currentWork = works.filter((stateWork) => stateWork.url === url);
    setWork(currentWork[0]);
  }, [works, url]);
  console.log(setWorks);

  return (
    <>
      {work && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{work.title}</h2>
            <img src={work.mainImg} alt="" />
          </HeadLine>
          <ImageDisplay>
            <img src={work.secondaryImg} alt="audio-2" />
          </ImageDisplay>

          <Awards>
            {work.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: #fff;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 80%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    object-fit: cover;
    width: 100%;
    object-fit: cover;
  }
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetails;
