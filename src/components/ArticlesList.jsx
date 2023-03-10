import * as api from '../utils/api'
import SortArticles from './SortArticles';
import ErrorComponent from './ErrorComponent';
import { useState, useEffect } from "react";
import ArticleCard from './ArticleCard';
import { useParams } from 'react-router-dom';

export default function ArticlesList({selectedSortBy}) {

    const [isLoading, setIsLoading] = useState(true);
    const [articlesList, setArticlesList] = useState([]);
    const [sortBy, setSortBy] = useState(selectedSortBy);
    const [orderBy, setOrderBy] = useState("desc")
    const [error, setError] = useState(null);
    const {topic} = useParams();

    useEffect(() => {
        setIsLoading(true);
        api.fetchArticlesList(topic, sortBy, orderBy).then((data) => {
            setArticlesList(data.articles);
            setIsLoading(false);
        })
        .catch((err) => {
            setError({err});
            setIsLoading(false);
        })
    }, [topic, sortBy, orderBy])
    
    if (isLoading) {
        return <p>Loading...</p>;
      }

    if (error) {
        return <ErrorComponent message={error.err.response.data.msg}/>
    }     

    return (
        <main className='container'>
            <section className='sort_articles_container'>
                <SortArticles setSortBy={setSortBy} setOrderBy={setOrderBy}/>
            </section>
            <section>
              {articlesList.map((article) => {
             return <ArticleCard key={article.article_id} article={article}/>
            })}
            </section>
        </main>
    )
}