import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as api from '../utils/api'

export default function Nav() {

    const [menuTopics, setMenuTopics] = useState([]);

    useEffect(() => {
        api.fetchTopics().then(({topics}) => {
            setMenuTopics(topics);
        })
    })

const navigate = useNavigate();

    return <nav className='nav'>
        <span>
        <span><Link className='text_link' to="/"><button className='nav_button'>Home</button></Link> </span>

        <span> <Link className='text_link' to="/all_articles"><button className='nav_button'>View All Articles</button></Link></span>

        <span>
            <select onChange={(e) => navigate(`${e.target.value}/articles`)} className='nav_button'>
            <option selected hidden>Topics</option>
                {menuTopics.map((topic) => {
                    return <option value={topic.slug} className="text_link">{topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}</option>
                })}
            </select>
        </span>

        </span>
    </nav>
    
}