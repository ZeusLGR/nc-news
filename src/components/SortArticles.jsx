
export default function SortArticles({setSortBy, setOrderBy}) {

    return (
        <div>
        <select  value="" onChange={(e) => setSortBy(e.target.value)} className='sort_by_button'>
            <option value="" disabled>Sort by</option>
            <option value="title">Title</option>
            <option value="topic">Topic</option>
            <option value="author">Username</option>
            <option value="created_at">Date</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comment count</option>

        </select>

        <select value="" onChange={(e) => setOrderBy(e.target.value)} className='sort_by_button'>
            <option value="" disabled>Order By</option>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
        </select>
        </div>
    )
    
}