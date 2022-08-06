import React from "react";
import logo from "../../../src/logo.png";
import language from "../../../src/language.png";
import profile from "../../../src/profile.png";
import mapicon from "../../../src/mapicon.png";
import forum from "../../../src/forum.png";
import home from "../../../src/home.png";
import "./Navigation.scss"
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <img className="logo" src={logo} />
      <ul className="nav-list">
        <li className="nav-item"><Link className="nav-link" to="/search"><img src={mapicon} /><p>Map</p></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/language"><img src={language} /><p>Language</p></Link></li>
        <li className="nav-item"><Link className="nav-link" to="/forum"><img src={forum} /><p>Forum</p></Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
