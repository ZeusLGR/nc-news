import './App.css';
import { Routes, Route } from "react-router-dom";
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
        <Route path="/all_articles" element={<ArticlesList/>} />
        <Route path="/articles/:article_id" element={<SingleArticle/>} />
      </Routes>
    
    </div>
  );
}

export default App;
