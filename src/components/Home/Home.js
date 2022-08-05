import React from "react";
import logo from "../../../src/logo.png";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div>
      <div className="home">
        <Link className="btn-text" to="/search">
          <button className="home-btn">ENTER</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
