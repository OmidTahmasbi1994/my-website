import image from '../images/icon.jpg';

export const Footer = ()=>{
    return(
        <footer className="footer">
            <sub>CopyRight © 2024 <img className='footerIcon' src={image}/> All Rights Reserved.</sub>
        </footer>
    )
}