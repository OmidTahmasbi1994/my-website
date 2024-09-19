import image from '../images/icon.jpg';

export const Footer = ()=>{
    return(
        <footer className="footer">
            <p>CopyRight © 2024 <img className='footerIcon' src={image} alt=''/> All Rights Reserved.</p>
        </footer>
    )
}