import { Link } from 'react-router-dom';


export default function Nav() {
    return <nav className='nav'>
        <span>
        <span><Link className='text_link' to="/"><button className='nav_button'>Home</button></Link> </span>

        <span> <Link className='text_link' to="/all_articles"><button className='nav_button'>View All Articles</button></Link></span>
        </span>
    </nav>
    
}