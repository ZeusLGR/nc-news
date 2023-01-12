import * as api from '../utils/api'
import { useState, useEffect } from "react";
import ArticleCard from './ArticleCard';


export default function ArticlesList() {

    const [isLoading, setIsLoading] = useState(true);
    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        api.fetchArticlesList().then((data) => {
            setArticlesList(data.articles);
            setIsLoading(false);
        })
    }, [])
    
    if (isLoading) {
        return <p>Loading...</p>;
      }

    return (
        <div className='container'>
            {articlesList.map((article) => {
           return <ArticleCard key={article.article_id} article={article}/>
        })}
        </div>
    )
}