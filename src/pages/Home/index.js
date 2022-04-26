import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/styles.css";
import "./styles/contentsStyle.css";

import Logo from "../../assets/Logowht.png";
import LogoReduced from "../../assets/LogoReducedwht.png";
import Perfil from "../../assets/perfil.jpg";

import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineClose,
  AiFillHtml5,
} from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { GrReactjs } from "react-icons/gr";
import { SiJavascript } from "react-icons/si";

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
            //<Link className="side-menu-link" to="/projects">
            //  Projects
           // </Link>
            <Link className="side-menu-link" to="/contact">
              Contact
            </Link>
          </motion.div>
        ) : null}
        <div className="nav-container">
          <button className="nav-button" onClick={() => setIsMenuVisible(true)}>
            <TiThMenu className="nav-button-icons" />
          </button>
          <Link className="projects-link" to="/projects">
            Project
          </Link>
          <Link className="contact-link" to="/contact">
            Contact
          </Link>
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
      <div className="content">
        <div className="perfil-container">
          <div className="img-frame">
            <img className="perfil-img" src={Perfil} alt={"perfil-img..."} />
          </div>
          <h3 className="perfil-name">Murilo Ramos</h3>
          <p className="perfil-description">
            Web & Mobile Developer <br /> Based in São Carlos
          </p>
        </div>
        <div className="product-container">
          <div className="product-box">
            <h3 className="tech-products">Main Technologies</h3>
            <div className="tech-box">
              <SiJavascript className="tech-icons" id="JS" />
              <GrReactjs className="tech-icons" id="React" />
              <AiFillHtml5 className="tech-icons" id="HTML" />
            </div>
            <h3 className="tech-products">Skills</h3>
            <ul className="skills-list">
              <li>Learn new technologies easily</li>
              <li>Proactivity and creativity</li>
              <li>Ready to face new challenges.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
