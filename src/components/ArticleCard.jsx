import { FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom"
import moment from 'moment';
moment().format();

export default function ArticleCard({article}) {

    const datePosted = moment(`${article.created_at}`).calendar();

    return ( 
    <article className="article_card">
        
        <header>
          <span className="article_card_topic">{article.topic} • </span>
          <span className="article_posted_by">posted by {article.author} • </span>
          <span className="article_posted_by"> {datePosted}</span>
        </header>

        <Link className="text_link" to={`/articles/${article.article_id}`}>
          <h1 className="article_card_title">{article.title}</h1>
        </Link>
        
        <section className="single_article_bottom_container">
          <p className="article_card_comments"><FaRegCommentDots className="comment_icon"/> {article.comment_count} comments</p>

          <p className="votes_text">{article.votes} Likes</p>
        </section>

    </article>
    )
    
}