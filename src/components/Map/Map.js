import React from "react";
import map from "../../../src/map.jpg";
import "./Map.scss";
import {FaSearch} from "react-icons/fa";;

function Map() {
  return (
    <div>
      <div className="map">
        <div className="searchBar">
          <div className="search">
            <input type="text" className="searchTerm" placeholder="Finding your way..." />
            <button type="submit" className="searchButton">
              <FaSearch />
            </button>
          </div>
        </div>
        <img className="mapholder" src={map} alt="map"/>
      </div>
    </div>
  );
}

export default Map;
