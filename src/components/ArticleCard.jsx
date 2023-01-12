import { FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom"
import moment from 'moment';
moment().format();

export default function ArticleCard({article}) {

    const datePosted = moment(`${article.created_at}`).startOf('day').fromNow();

    return <div className="article_card">
        
        <span className="field1">
          <span className="article_card_topic">{article.topic} • </span>
          <span className="article_posted_by">posted by {article.author} • </span>
          <span className="article_posted_by"> {datePosted}</span>
        </span>

        <Link className="text_link" to={`/articles/${article.article_id}`}><h3 className="article_card_title">{article.title}</h3></Link>

        <p className="article_card_comments"><FaRegCommentDots className="comment_icon"/> {article.comment_count} comments</p>

    </div>
    
}