import React from "react";
import "./Main.css";
import Button from "../../Common/Button/Button";
import { delay, motion } from "framer-motion";
import phone1 from "../../../assets/phone1.svg";
import gradient1 from "../../../assets/gradient1.svg";
import OutlineBtn from "./OutlineBtn/OutlineBtn";

function Main() {
  return (
    <div className="hero-content">
      <div className="headings">
        <motion.h1
          className="heading1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="heading2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="tagline"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btns"
          nitial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Button />
          <OutlineBtn />
        </motion.div>
      </div>
      <div className="phone-container">
        <div className="image_container">
          <motion.img
            src={phone1}
            className="iphone"
            initial={{ y: -15 }}
            animate={{ y: 15 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          />
          <img src={gradient1} className="gradient" />
        </div>
      </div>
    </div>
  );
}

export default Main;
