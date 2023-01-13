import * as api from '../utils/api'
import { useState, useEffect } from "react";
import ArticleCard from './ArticleCard';
import { useParams } from 'react-router-dom';

export default function ArticlesList() {

    const [isLoading, setIsLoading] = useState(true);
    const [articlesList, setArticlesList] = useState([]);
    const {topic} = useParams();

    useEffect(() => {
        setIsLoading(true);
        api.fetchArticlesList(topic).then((data) => {
            setArticlesList(data.articles);
            setIsLoading(false);
        })
    }, [topic])
    
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