import React from "react";
import logo from "../../../src/logo.png";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div>
      <div className="home">
        <img className="enter-logo" src={logo} alt="logo"/>
        <Link className="btn-text" to="/map">
          <button className="home-btn">ENTER</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
