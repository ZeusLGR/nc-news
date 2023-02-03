import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import { useState } from "react";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const [selectedSortBy, SetSelectedSortBy] = useState("created_at");
  return (
    <div className="App">
      <Header />
      <Nav SetSelectedSortBy={SetSelectedSortBy} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<ErrorComponent />} />
        <Route
          path="/all_articles"
          element={<ArticlesList selectedSortBy={selectedSortBy} />}
        />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route
          path="/:topic/articles"
          element={<ArticlesList selectedSortBy={selectedSortBy} />}
        />
      </Routes>
    </div>
  );
}

export default App;
