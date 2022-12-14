import React, { useState, useEffect } from "react";
import "./SearchBar.scss";
import axios from "axios";

function SearchBar() {
  let [inputText, setInputText] = useState("");
  let [detectLanguageKey, setdetectedLanguageKey] = useState("en");
  let [selectedLanguageKey, setLanguageKey] = useState("");
  let [languagesList, setLanguagesList] = useState([]);
  let [resultText, setResultText] = useState("");

  const getLanguageSource = () => {
    axios
      .post(`https://libretranslate.de/detect`, {
        q: inputText,
      })
      .then((response) => {
        // console.log("response.data[0].language", response.data[0].language);
        setdetectedLanguageKey(response.data[0].language)
        let data = {
          q: inputText,
          source: detectLanguageKey,
          target: selectedLanguageKey,
        };
        axios
          .post(`https://libretranslate.de/translate`, data)
          .then((response) => {
            setResultText(response.data.translatedText);
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    axios.get("https://libretranslate.de/languages").then((res) => {
      setLanguagesList(res.data);
      // console.log("languagesList", languagesList);
    });
  }, [selectedLanguageKey]);

  const languageKey = (selectedLanguage) => {
    setLanguageKey(selectedLanguage.target.value);
  };

  // const translateText = async () => {
  //   await getLanguageSource();
  //   let data = {
  //     q: inputText,
  //     source: detectLanguageKey,
  //     target: selectedLanguageKey,
  //   };
  //   axios.post(`https://libretranslate.de/translate`, data).then((response) => {
  //     setResultText(response.data.translatedText);
  //   });
  // };

  return (
    <div>
      <div className="search-form">
        <label>Source language : English</label>
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
              return (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              );
            })}
          </select>
        )}

        <button
          className="submit-btn"
          onClick={(e) => {
            getLanguageSource(e);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
