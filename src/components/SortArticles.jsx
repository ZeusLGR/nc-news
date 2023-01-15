
export default function SortArticles({setSortBy, setOrderBy}) {

    return (
        <div>
        <select  value="" onChange={(e) => setSortBy(e.target.value)} className='sort_by_button' aria-label="sort articles">
            <option value="" disabled>Sort by</option>
            <option value="title" aria-label="sort by title">Title</option>
            <option value="topic" aria-label="sort by topic">Topic</option>
            <option value="author" aria-label="sort by username">Username</option>
            <option value="created_at" aria-label="sort by date">Date</option>
            <option value="votes" aria-label="sort by likes">Likes</option>
            <option value="comment_count" aria-label="sort by comment count">Comment count</option>

        </select>

        <select value="" onChange={(e) => setOrderBy(e.target.value)} className='sort_by_button' aria-label="order articles">
            <option value="" disabled>Order</option>
            <option value="desc" aria-label="order by descending">Descending</option>
            <option value="asc" aria-label="order b ascending">Ascending</option>
        </select>
        </div>
    )
    
}