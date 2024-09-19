import {Link} from 'react-router-dom';
import image from '../images/icon.jpg';

export const Header = ()=>{
    return(
        <header className="header">
            <h2 className='headerTitle'><img className='headerIcon' src={image}/> Omid Tahmasebi</h2>
            <nav className='navigation'>
                <Link to={'/my-website/'}>Home</Link>
                <Link to={'/my-website/about'}>About</Link>
                <Link to={'/my-website/contact'}>Contact</Link>
            </nav>
        </header>
    )
}