import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import '../Header/Header.css'

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  box-sizing: border-box;
  padding: 1rem 2rem;
`;
const ListSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: hsl(0, 0%, 8%);
`;

const H3Heading = styled.h3`
  font-size: 2rem;
  font-weight: 700;
`;
const UlList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  list-style-type: none;
`;

const LiList = styled.li`
  font-size: 1.1rem;
  color: hsl(0, 0%, 41%);
  transition: all 0.3s ease;
  font-weight: 500;
  &:hover {
    color: hsl(0, 0%, 21%);
    cursor: pointer;
  }
`;
const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const LoginButton = styled.button`
  color: hsl(0, 0%, 41%);
  font-size: 1.1rem;
  height: 40px;
  width: 100px;
  background-color: transparent;
  border: none;
  &:hover {
    color: hsl(0, 0%, 8%);
    cursor: pointer;
  }
`;

const SignUp = styled.button`
  color: hsl(0, 0%, 41%);
  font-size: 1.1rem;
  height: 40px;
  width: 100px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    color: white;
    cursor: pointer;
    background-color: hsl(0, 0%, 8%);
  }
`;
const Header = ({loginModal, setLoginModal, signInModal, setSignInModal}) => {
  return (
    <div>
        <Navbar as={motion.nav} initial={{opacity:0,y:-1000}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <ListSection>
            <H3Heading>snap</H3Heading>
            <UlList>
              <LiList><NavLink to="/">Home</NavLink></LiList>
              <LiList><NavLink to="about">About</NavLink></LiList>
            </UlList>
          </ListSection>
          <ButtonSection>
            <LoginButton onClick={() => setLoginModal(!loginModal)}>Login</LoginButton>
            <SignUp onClick={() => setSignInModal(!signInModal)}>Register</SignUp>
          </ButtonSection>
        </Navbar>
    </div>
  );
};

export default Header;
