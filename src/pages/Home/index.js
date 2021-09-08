import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Logo from "../../assets/Logowht.png";
import LogoReduced from "../../assets/LogoReducedwht.png";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineClose,
} from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { motion } from "framer-motion";

function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="container">
      <div className="menu-container">
        {isMenuVisible ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className="side-menu"
          >
            <button className="close-button-menu">
              <AiOutlineClose
                className="close-icon-menu"
                onClick={() => setIsMenuVisible(false)}
              />
            </button>
            <Link className="side-menu-link" to="/projects">
              Projects
            </Link>
            <button className="side-menu-button">Contact</button>
          </motion.div>
        ) : null}
        <div className="nav-container">
          <button className="nav-button" onClick={() => setIsMenuVisible(true)}>
            <TiThMenu className="nav-button-icons" />
          </button>
          <Link className="projects-link" to="/projects">
            Project
          </Link>
          <button className="contact-button">Contact</button>
        </div>
        <div className="logo-container">
          <img className="logo-img" src={Logo} alt={"logo-img..."}></img>
          <img
            className="logo-img-reduced"
            src={LogoReduced}
            alt={"logo-img..."}
          ></img>
        </div>
        <div className="social-container">
          <button
            className="social-buttons"
            onClick={() => window.location.assign("https://github.com/MuriEdu")}
          >
            <AiOutlineGithub className="social-icons" />
          </button>
          <button
            className="social-buttons"
            onClick={() =>
              window.location.assign("https://linkedin.com/in/MuriEdu")
            }
          >
            <AiFillLinkedin className="social-icons" />
          </button>
          <button
            className="social-buttons"
            onClick={() =>
              window.location.assign(
                "https://instagram.com/muri.ramos_?utm_medium=copy_link"
              )
            }
          >
            <AiOutlineInstagram className="social-icons" />
          </button>
        </div>
      </div>
      <div className="site-container">
        <div className="product-container"></div>
      </div>
    </div>
  );
}

export default Home;
