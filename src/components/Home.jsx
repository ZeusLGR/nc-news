import * as api from '../utils/api'
import { useState, useEffect } from "react";
import ArticleCard from './ArticleCard';



export default function Home() {

    const [isLoading, setIsLoading] = useState(true);
    const [popularCodingArticle, setPopularCodingArticle] = useState([]);
    const [popularFootballArticle, setPopularFootballArticle] = useState([]);
    const [popularCookingArticle, setPopularCookingArticle] = useState([]);
    const [popularArticles, setPopularArticles] = useState([]);

    useEffect(() => {
        api.fetchPopularCodingArticles().then((data) => {
            setPopularCodingArticle([data.articles[0]]);
        })
        .then(() => {
        api.fetchPopularFootballArticles().then((data) => {
            setPopularFootballArticle([data.articles[0]]);
        })
        .then(() => {
        api.fetchPopularCookingArticles().then((data) => {
            setPopularCookingArticle([data.articles[0]]);
            setIsLoading(false);
        })    
        })
    })}, [])

    if (isLoading) {
        return <p>Loading...</p>;
      }

    return (
        <div>
        <h2 className="home_header">Hot Articles</h2>
        <div className='container'>
          {popularCodingArticle.map((article) => {
           return <ArticleCard key={article.article_id} article={article}/>
          })}
          {popularFootballArticle.map((article) => {
           return <ArticleCard key={article.article_id} article={article}/>
          })}
          {popularCookingArticle.map((article) => {
           return <ArticleCard key={article.article_id} article={article}/>
          })}
        </div>
        </div>
    )
}