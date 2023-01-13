import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Nav() {

const navigate = useNavigate();

    return <nav className='nav'>
        <span>
        <span><Link className='text_link' to="/"><button className='nav_button'>Home</button></Link> </span>

        <span> <Link className='text_link' to="/all_articles"><button className='nav_button'>View All Articles</button></Link></span>

        <span>
            <select onChange={(e) => navigate(`${e.target.value}/articles`)} className='nav_button'>
                
                <option selected hidden>Topics</option>
                <option value="coding" className='text_link' >Coding
            </option>
                <option value="cooking" className='text_link' >Cooking
                </option>
                <option value="football" className='text_link' >Football
                </option>
            
            </select>
        </span>

        </span>
    </nav>
    
}