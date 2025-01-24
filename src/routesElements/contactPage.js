import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faAt } from '@fortawesome/free-solid-svg-icons';
import image from '../images/linkedinIcon.png';

export const Contact = ()=>{
    return(
        <div className="originContainer">
            <header className="originHeader">
                <h3>Contact</h3>
            </header>

            <main className="originMain">
                <div>
                    <h4><FontAwesomeIcon icon={faEnvelope} /> Email</h4>
                    <form method='post' action='https://getform.io/f/avreqgda'  className='form'>
                        <input type='text' name='name' className='nameInput' placeholder='Name' />
                        <input type='email' name='email' className='emailInput' placeholder='Email' />
                        <textarea name='massage' className='massageInput' rows='10' placeholder='Message'></textarea>
                        <button type='submit' className='buttonInput'>send</button>
                    </form>
                </div>
                <div>
                    <h6>tomid7373 <FontAwesomeIcon icon={faAt} /> gmail.com</h6>
                </div>
                <div>
                    <a className='linkedin_link' href='https://www.linkedin.com/in/omid-tahmasebi-/' target='_blank' rel='noreferrer'><img src={image} className='linkedin_image' /> LinkedIn</a>
                </div>
            </main>
        </div>
    )
}