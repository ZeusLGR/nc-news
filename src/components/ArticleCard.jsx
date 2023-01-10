export default function ArticleCard({article}) {
    return <div className="article_card">
        <span className="field1">
          <span className="article_card_topic">{article.topic} • </span>
          <span className="article_card_author">posted by {article.author}</span>
        </span>

        <h3 className="article_card_title">{article.title}</h3>
        <p className="article_card_comments">{article.comment_count} comments</p>
        
    </div>
    
}