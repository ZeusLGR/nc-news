import * as api from '../utils/api'
import { useState, useEffect } from "react";
import ArticleCard from './ArticleCard';



export default function Home() {

    const [isLoading, setIsLoading] = useState(true);
    const [popularArticles, setPopularArticles] = useState([]);

    useEffect(() => {
        api.fetchPopularArticles().then((pops) => {
          setPopularArticles(pops);
          setIsLoading(false); 
        })
        
    }, [])

    if (isLoading) {
        return <p>Loading...</p>;
      }

    return (
        <main>
        <h1 className="home_header">Hottest Articles</h1>
        <section className='container'>
          {popularArticles.map((article) => {
            return <ArticleCard key={article.article_id} article={article}/>
          })}
        </section>
        </main>
    )
}