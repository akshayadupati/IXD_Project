import React, { useState, useEffect } from "react";
import "./SearchBar.scss";
import axios from "axios";
import map from "../../../src/map.jpg";
function SearchBar() {
  const [inputText, setInputText] = useState("");
  const [detectLanguageKey, setdetectedLanguageKey] = useState("");
  const [selectedLanguageKey, setLanguageKey] = useState("");
  const [languagesList, setLanguagesList] = useState([]);
  const [resultText, setResultText] = useState("");

  const getLanguageSource = () => {
    axios
      .post(`https://libretranslate.de/detect`, {
        q: inputText,
      })
      .then((response) => {
        setdetectedLanguageKey(response.data[0].language);
      });
  };

  useEffect(() => {
    axios.get("https://libretranslate.de/languages").then((res) => {
      setLanguagesList(res.data);
      console.log("languagesList", languagesList);
    });
  }, [inputText]);

  const languageKey = (selectedLanguage) => {
    setLanguageKey(selectedLanguage.target.value);
  };

  const translateText = async () => {
    await getLanguageSource();
    let data = {
      q: inputText,
      source: detectLanguageKey,
      target: selectedLanguageKey,
    };
    axios.post(`https://libretranslate.de/translate`, data).then((response) => {
      setResultText(response.data.translatedText);
    });
  };

  return (
    <div>
      <div className="search-form">
        <textarea
          rows="10"
          cols="80"
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type text to translate.."
        ></textarea>
        <textarea
          rows="10"
          cols="80"
          placeholder="Your translated text will be here..."
          value={resultText}
          disabled={true}
        ></textarea>
        {languagesList.length > 0 && (
          <select onChange={languageKey} name="selectedLanguageKey">
            <option>Please Select Language..</option>
            {languagesList.map((lang) => {
              return <option value={lang.code}>{lang.name}</option>;
            })}
          </select>
        )}

        <button
          class="submit-btn"
          onClick={(e) => {
            translateText();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
