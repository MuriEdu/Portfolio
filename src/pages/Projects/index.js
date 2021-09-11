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
        <Link className="_content" to="/P">
          <h2 className="pTitle">{data.P1.name}</h2>
          <p className="description">{data.P1.description}</p>
        </Link>
      </div>
      <div className="product">
        <img className="img_" src={data.P2.logo} alt={"product img..."} />
        <Link className="_content" to="/P">
          <h2 className="pTitle">{data.P2.name}</h2>
          <p className="description">{data.P2.description}</p>
        </Link>
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
