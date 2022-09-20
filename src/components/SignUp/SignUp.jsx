import { animate, AnimatePresence, motion } from "framer-motion";
import React from "react";
import "../LoginModal/LoginModal.css";

const Background = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration:0.5
        }
    },
    exit: {
        opacity: 0,
    }
}
const SignUp = ({ signInModal, setSignInModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {signInModal && (
          <motion.section
            className="background"
            variants={Background}
            exit="exit"
            initial="initial"
            animate="animate"
            
          >
            <motion.div className="card">
              <motion.img
                onClick={() => setSignInModal(false)}
                whileHover={{ rotate: 360, scale:[1,1.1,1.2,1.3,1.4,1.5,1] }}
                whileTap={{ scale: 0.8, x: -10 }}
                transition={{ duration: 0.5 }}
                src="/images/cross.png"
                alt=""
              />
              <motion.input
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "95%" }}
                transition={{ duration: 0.4, delay: 0.6 }}
                type="text"
                className="email"
                placeholder="example@gmail.com"
              />
              <motion.input
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "95%" }}
                transition={{ duration: 0.4, delay: 0.6 }}
                type="password"
                className="email"
                placeholder="Enter your password"
              />
              <motion.button
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "200px" }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Sign Up
              </motion.button>
            </motion.div>
          </motion.section>
      )}
    </AnimatePresence>
  );
};

export default SignUp;
