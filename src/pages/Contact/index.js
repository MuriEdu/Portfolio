import { useState } from "react";
import "./style.css";

import { BiHomeAlt } from "react-icons/bi";

import Logo from "../../assets/Logoblk.png";
import { Link } from "react-router-dom";

import Email from "../../services/email";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div className="container">
      <div className="menu">
        <Link to="/">
          <BiHomeAlt className="home-icon" />
        </Link>
      </div>
      <div className="form">
        <div className="img-container">
          <img className="_img" src={Logo} alt={"logo-img..."} />
        </div>
        <div className="form-container">
          <h3 className="form-title">SEND YOUR MESSAGE</h3>
          <input
            className="inp"
            placeholder="NAME"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <input
            className="inp"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <p className="message">Message:</p>
          <textarea
            className="inp"
            id="txtarea"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <div className="submit-container">
        <button
          className="submit-btn"
          onClick={() => {
            if (name.trim() === "") {
              return alert("I think you forgot some field");
            }
            if (email.trim() === "") {
              return alert("I think you forgot some field");
            }
            if (msg.trim() === "") {
              return alert("I think you forgot some field");
            }
            Email(name, email, msg);

            setName("");
            setEmail("");
            setMsg("");
            return;
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
