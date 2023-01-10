import { Link } from 'react-router-dom';


export default function Nav() {
    return <nav className='nav'>
        <Link className='text_link' to="/all_articles"><button className='nav_button'>View All Articles</button></Link>
    </nav>
    
}