import { Link } from "react-router-dom"


export default function ArticleCard({article}) {
    return <div className="article_card">
        
        <span className="field1">
          <span className="article_card_topic">{article.topic} • </span>
          <span className="article_posted_by">posted by {article.author}</span>
        </span>

        <Link className="text_link" to={`/articles/${article.article_id}`}><h3 className="article_card_title">{article.title}</h3></Link>

        <p className="article_card_comments">{article.comment_count} comments</p>
        
    </div>
    
}