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
        <div>
        <h2 className="home_header">Hot Articles</h2>
        <div className='container'>
          {popularArticles.map((article) => {
            return <ArticleCard key={article.article_id} article={article}/>
          })}
        </div>
        </div>
    )
}