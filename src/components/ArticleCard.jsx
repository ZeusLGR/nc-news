export default function ArticleCard({article}) {
    return <div>
        <p>{article.title}</p>
        <p>{article.topic}</p>
        <p>{article.author}</p>
    </div>
    
}