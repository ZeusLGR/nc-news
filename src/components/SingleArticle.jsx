import Vote from "./Vote";
import { FaRegCommentDots } from "react-icons/fa";
import CommentsList from "./CommentsList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from '../utils/api'
import moment from 'moment';
moment().format();

export default function SingleArticle() {

    const {article_id} = useParams()
    const [currentArticle, setCurrentArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api.fetchArticleById(article_id).then((data) => {
            setCurrentArticle(data.article);
            setIsLoading(false);
        })
    }, [])

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const datePosted = moment(`${currentArticle.created_at}`).startOf('day').fromNow();

    return (
        <div className="container">
        <div className="article_card">

          <span className="field1">
            <span className="article_card_topic">{currentArticle.topic} • </span>
            <span className="article_posted_by">posted by {currentArticle.author} • </span>
            <span className="article_posted_by"> {datePosted}</span>
          </span>

          <h3 className="article_card_title">{currentArticle.title}</h3>
          <p className="article_body">{currentArticle.body}</p>
        

          <span className="single_article_bottom_container">
          <span className="article_card_comments"><FaRegCommentDots className="comment_icon"/> {currentArticle.comment_count} comments </span> 
          <span><Vote votes={currentArticle.votes}/></span>
          </span>
          

          <p className="article_card_comments">{currentArticle.comment_count} comments</p>

        </div>
          <CommentsList />
        </div>
    )
}