import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faAt } from '@fortawesome/free-solid-svg-icons';

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
                        <textarea name='massage' className='massageInput' rows='10' placeholder='send me a Massage...'></textarea>
                        <button type='submit' className='buttonInput'>send</button>
                    </form>
                </div>
                <div>
                    <h6><FontAwesomeIcon icon={faAt} /> tomid7373gmail.com</h6>
                </div>
            </main>
        </div>
    )
}