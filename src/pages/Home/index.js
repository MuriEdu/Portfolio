import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Logo from "../../assets/Logowht.png";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { HiOutlineDeviceMobile } from "react-icons/hi";

function Home() {
  return (
    <div className="container">
      <div className="menu-container">
        <div className="nav-container">
          <button className="nav-button">
            <TiThMenu className="nav-button-icons" />
          </button>
          <Link className="projects-link" to="/projects">
            Project
          </Link>
          <button className="contact-button">Contact</button>
        </div>
        <div className="logo-container">
          <img className="logo-img" src={Logo} alt={"logo-img..."}></img>
        </div>
        <div className="social-container">
          <button className="social-buttons">
            <AiOutlineGithub className="social-icons" />
          </button>
          <button className="social-buttons">
            <AiFillLinkedin className="social-icons" />
          </button>
          <button className="social-buttons">
            <AiOutlineInstagram className="social-icons" />
          </button>
        </div>
      </div>
      <div className="site-container"></div>
    </div>
  );
}

export default Home;
