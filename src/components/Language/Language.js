import React, { useState, useEffect } from "react";
import axios from "axios";

function Language() {
  let [languagesList, setLanguagesList] = useState([]);

  useEffect(() => {
    axios.get("https://libretranslate.de/languages").then((res) => {
      setLanguagesList(res.data);
      console.log("languagesList", languagesList);
    });
  }, []);

  return (
    <div>
      <ul className="lang-list">
        {languagesList.map((eachLang) => {
          return <li className="lang-item" key={eachLang.name}>{eachLang.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Language;
