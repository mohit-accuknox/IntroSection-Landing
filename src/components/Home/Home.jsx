import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 2rem;
`;
export const ContentHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  flex: 1 1;
`;

const ContentdivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
`;

export const H3Content = styled.h3`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--almost-black);
`;
export const ImageContainer = styled.div`
  width: 50%;
  flex: 1 1;
  padding: 2rem;
`;
export const Img = styled.img`
  width: 50%;
`;
export const Paragraph = styled.p`
  font-size: 1.1rem;
  color: hsl(0, 0%, 41%);
  width: 100%;
  margin-bottom: 2rem;
`;

const LearnMore = styled.button`
  background-color: Black;
  border-radius: 10px;
  font-size: 1rem;
  width: 130px;
  height: 45px;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    border: 2px solid black;
    cursor: pointer;
    color: black;
    font-weight: 700;
  }
`;
const Company = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const CompanyImg = styled.img`
  width: 100px;
`;

const Home = () => {
  return (
    <div>
      <AnimatePresence>
        <Section
          as={motion.section}
          exit={{ x: -1000, opacity: 0 }}
          initial={{ opacity: 0, x: 1000 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeIn",
            exit: { duration: 1, ease: "easeIn" },
          }}
        >
          <ContentHome as={motion.div}>
            <ContentdivContainer>
              <H3Content>Make remote work</H3Content>
              <Paragraph>
                Get your team in sync, no matter your location Streamline
                processes, create team rituals, and watch productivity soar.
              </Paragraph>
              <LearnMore>Learn more</LearnMore>
            </ContentdivContainer>

            <Company>
              <CompanyImg src="/images/client-databiz.svg" />
              <CompanyImg src="/images/client-audioPhile.svg" />
              <CompanyImg src="/images/client-maker.svg" />
              <CompanyImg src="/images/client-meet.svg" />
            </Company>
          </ContentHome>
          <ImageContainer as={motion.div}>
            <Img as={motion.img} exit={{width: "0"}}
              initial={{width: "0"}}
              animate={{width: "50%"}}
              transition={{duration:0.8, delay: 0.6}} src="/images/image-hero-desktop.png" alt="" />
          </ImageContainer>
        </Section>
      </AnimatePresence>
    </div>
  );
};

export default Home;
