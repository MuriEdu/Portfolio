import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./styles.css";

import { data } from "./products";

function Projects() {
  return (
    <div className="container-projects">
      <div className="menu" id="menu_">
        <Link to="/">
          <BiHomeAlt className="home-icon" />
        </Link>
      </div>
      <div className="product">
        <img className="img_" src={data.P1.logo} alt={"product img..."} />
        <button
          className="_content"
          onClick={() => {
            window.location.assign(data.P1.link);
          }}
        >
          <h2 className="pTitle">{data.P1.name}</h2>
          <p className="description">{data.P1.description}</p>
        </button>
      </div>
      <div className="product">
        <img className="img_" src={data.P2.logo} alt={"product img..."} />
        <button
          className="_content"
          onClick={() => {
            window.location.assign(data.P2.link);
          }}
        >
          <h2 className="pTitle">{data.P2.name}</h2>
          <p className="description">{data.P2.description}</p>
        </button>
      </div>
      <div className="link-div">
        <Link to="/contact" className="link-together">
          <p className="link-txt">
            You need a web or mobile developer? <br /> Lets’s go work together
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
