import {Link} from 'react-router-dom';

export const Header = ()=>{
    return(
        <header className="header">
            <h1 className='headerTitle'>Omid Tahmasebi</h1>
            <nav className='navigation'>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
            </nav>
        </header>
    )
}