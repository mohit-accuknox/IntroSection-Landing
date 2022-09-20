import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { AnimatePresence } from "framer-motion";
import LoginModal from "./components/LoginModal/LoginModal";
import { useState } from "react";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const location = useLocation();

  const [loginModal, setLoginModal] = useState(false);

  const [signInModal,setSignInModal] = useState(false);

  console.log(loginModal);

  return (
    <div className="App">
      <Header loginModal={loginModal} setLoginModal={setLoginModal} signInModal={signInModal} setSignInModal={setSignInModal}/>
      {loginModal && (
        <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
      )}

      {signInModal && <SignUp signInModal={signInModal} setSignInModal={setSignInModal}/>}
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
