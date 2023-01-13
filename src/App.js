import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/all_articles" element={<ArticlesList/>} />
        <Route path="/articles/:article_id" element={<SingleArticle/>} />
        <Route path="/:topic/articles" element={<ArticlesList/>} />
      </Routes>
    
    </div>
  );
}

export default App;
