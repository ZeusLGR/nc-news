import * as api from '../utils/api'
import { useState, useEffect } from "react";
import ArticleCard from './ArticleCard';
import SortArticles from './SortArticles';


export default function ArticlesList() {

    const [isLoading, setIsLoading] = useState(true);
    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        api.fetchArticlesList().then((data) => {
            console.log(data)
            setArticlesList(data.articles);
            setIsLoading(false);
        })
    }, [])
    
    if (isLoading) {
        return <p>Loading...</p>;
      }

    return (
        <div>
            <ul className="articlesList">{articlesList.map((article) => {
           return <li key={article.article_id}><ArticleCard article={article}/></li>
        })}
        </ul>
        </div>
    )
}