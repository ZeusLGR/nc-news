import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from '../utils/api'

export default function SingleArticle() {

    const {article_id} = useParams()
    const [currentArticle, setCurrentArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api.fetchArticleById(article_id).then((data) => {
            setCurrentArticle(data.article);
            setIsLoading(false);
        }, [])

    })

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const datePosted = moment(`${currentArticle.created_at}`).utc().format('MM/DD/YYYY')

    return (
        <div className="container">
        <div className="article_card">

          <span className="field1">
          <span className="article_card_topic">{currentArticle.topic} • </span>
          <span className="article_posted_by">posted by {currentArticle.author}</span>
          <span className="article_posted_by"> at {currentArticle.created_at}</span>
        </span>

        <h3 className="article_card_title">{currentArticle.title}</h3>
        <p className="article_body">{currentArticle.body}</p>
        
        <p className="article_card_comments">{currentArticle.comment_count} comments</p>
        
        </div>
        </div>
    )
}