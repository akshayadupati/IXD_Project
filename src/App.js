import SearchBar from "./components/SearchBar/SearchBar";
import Home from "./components/Home/Home";
import Language from "./components/Language/Language";
import Navigation from "./components/Navigation/Navigation";
import Forum from "./components/Forum/Forum.js";
import SearchPage from "./components/SearchPage/SearchPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="language" element={<Language />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
