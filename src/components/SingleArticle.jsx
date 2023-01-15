import Vote from "./Vote";
import { FaRegCommentDots } from "react-icons/fa";
import CommentsList from "./CommentsList";
import { useEffect, useState } from "react";
import PostComment from "./PostComment";
import ErrorComponent from "./ErrorComponent";
import { useParams } from "react-router-dom";
import * as api from '../utils/api'
import moment from 'moment';
moment().format();

export default function SingleArticle() {

    const {article_id} = useParams();
    const [currentArticle, setCurrentArticle] = useState({});
    const [commentsList, setCommentsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.fetchArticleById(article_id).then((data) => {
            setCurrentArticle(data.article);
            setIsLoading(false);
        })
        .catch((err) => {
          setError({err});
          setIsLoading(false);
        })
    }, [article_id])

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
      return <ErrorComponent message={error.err.response.data.msg}/>
  } 

    const datePosted = moment(`${currentArticle.created_at}`).startOf('day').fromNow();

    return (
        <article className="container">
        <main className="article_card">

          <header>
            <span className="article_card_topic">{currentArticle.topic} • </span>
            <span className="article_posted_by">posted by {currentArticle.author} • </span>
            <span className="article_posted_by"> {datePosted}</span>
          </header>

          <h3 className="article_card_title">{currentArticle.title}</h3>

          <p className="article_body">{currentArticle.body}</p>
        

          <section className="single_article_bottom_container">
            <span className="article_card_comments"><FaRegCommentDots className="comment_icon"/> {currentArticle.comment_count} comments </span> 
            
            <span><Vote votes={currentArticle.votes}/></span>
          </section>
          
          <section className="post_comment_container">
            <PostComment setCommentsList={setCommentsList}/>
          </section>

        </main>
        
          <section>
          <CommentsList commentsList={commentsList} setCommentsList={setCommentsList}/>
          </section>
        </article>
    )
}