import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../LoginModal/LoginModal.css";

const LoginModal = ({ loginModal, setLoginModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {loginModal && (
        <motion.section
          className="background"
          exit={{y:-1000}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5}}
        >
          <motion.div className="card">
            <motion.img
              onClick={() => setLoginModal(!loginModal)}
              whileHover={{ rotate: 360 }}
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
              Sign In
            </motion.button>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
