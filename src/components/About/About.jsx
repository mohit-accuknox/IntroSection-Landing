import React from "react";
import {
  ImageContainer,
  Section,
  Img,
  ContentHome,
  H3Content,
  Paragraph,
} from "../Home/Home";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96.5%;
  padding: 2rem;
`;

const AboutContainer = styled.div`
  flex: 1 1;
  /* width: 80%; */
  flex-basis: 1;
`;

const ImgContainer = styled.img`
  width: 40%;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 40%;
  flex-basis: 1;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
`;

const Para = styled.p`
  font-size: 1.5rem;
  color: hsl(0, 0%, 41%);
  line-height: 3rem;
`;

const About = () => {
  return (
    <div>
      <AnimatePresence>
        <AboutSection
          as={motion.section}
          exit={{ x: -1000, opacity: 0 }}
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeIn",
            exit: { duration: 0.8, ease: "easeIn" },
          }}
        >
          <AboutContainer>
            <ImgContainer
              as={motion.img}
              exit={{width: "0"}}
              initial={{width: "0"}}
              animate={{width: "40%"}}
              transition={{duration:0.8}}
              src="/images/image-hero-desktop.png"
              alt=""
            />
          </AboutContainer>
          <TextContainer
            as={motion.div}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, exit: { duration: 1, delay: 1.3 } }}
          >
            <Heading>THE LEADER IN INTERACTIVE VR</Heading>
            <Para>
              Founded in 2011, Loopstuidos has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed business
              through digital experiences that bind to their bond.
            </Para>
          </TextContainer>
        </AboutSection>
      </AnimatePresence>
    </div>
  );
};

export default About;
