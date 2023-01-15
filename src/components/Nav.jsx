import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as api from '../utils/api'

export default function Nav({setSelectedSortBy}) {

    const [menuTopics, setMenuTopics] = useState([]);
    const [selected, setSelected] = useState("Topics")

    useEffect(() => {
        api.fetchTopics().then(({topics}) => {
            setMenuTopics(topics);
        })
    }, [selected])

const navigate = useNavigate();

    return (
    <nav className='nav'>
        
        <Link className='text_link' to="/">
            <button className='nav_button' aria-label="navigate to home page">Home</button>
        </Link> 
        <Link className='text_link' to="/all_articles" onClick={() => {
            setSelected("Topics");
            setSelectedSortBy("created_at");
        }}>
            <button className='nav_button' aria-label="navigate to all articles page">View All Articles</button>
        
        </Link>

        
        <select value={selected} onChange={(e) => navigate(`${e.target.value}/articles`)} className='nav_button' aria-label="select a topic">
            <option disabled>Topics</option>
            
            {menuTopics.map((topic) => {
                return <option key={topic.slug} value={topic.slug} className="text_link" aria-label="view all articles of this topic">
                    {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
                </option>
                })}
        </select>
        
    </nav>
    )
    
}