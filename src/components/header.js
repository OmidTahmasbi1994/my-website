import {Link} from 'react-router-dom';

export const Header = ()=>{
    return(
        <header className="header">
            <h1 className='headerTitle'>Omid Tahmasebi</h1>
            <nav className='navigation'>
                <Link to={'/my-website/'}>Home</Link>
                <Link to={'/my-website/about'}>About</Link>
                <Link to={'/my-website/contact'}>Contact</Link>
            </nav>
        </header>
    )
}