import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

import "./styles.css";

function Projects() {
  const data = JSON.parse(window.sessionStorage.getItem("@PRODUCTS"));

  const products = data.map((item) => {
    return (
      <div
        className="products"
        onClick={() => {
          window.open(item.link);
        }}
      >
        <p className="productsTitle">{item.name}</p>
        <p className="productsTxt">{item.description}</p>
      </div>
    );
  });

  return (
    <div className="container-projects">
      <div className="menu" id="menu_">
        <Link to="/">
          <BiHomeAlt className="home-icon" />
        </Link>
        <p id="projects-title">Projects</p>
      </div>
      <div className="productsDiv">{products}</div>
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
