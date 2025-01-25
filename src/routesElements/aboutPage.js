import image from '../images/photo.jpg';
import payamenoor from '../images/payamenoor.png';
import farhangian from '../images/farhangian.png';
import reactjs from '../images/reactjs.png';
import javascript from '../images/javascript.png';
import bootstrap from '../images/bootstrap.png';
import CSS from '../images/css.png';
import HTML from '../images/html.png';
import Python from '../images/Python.png';
import Git from '../images/git.png';
import Github from '../images/github.png';
import GoogleScholar from '../images/googlescholar.png';

export const About = ()=>{
    return(
        <div className="originContainer">
            <header className="originHeader">
                <h3>About Me</h3>
            </header>

            <main className="originMain">
                <img src={image} className='personalimage'/>
                <div>
                    <h5>
                        Omid Tahmasebi Boldaji<br/>
                        Born in March/1994 in Iran<br/>   
                    </h5>
                </div>

                <div>
                    <h4>Education</h4>
                    <h5>
                        <ul>
                            <li> BSc in Computer Engineering @ Payame Noor University</li>
                            <li>  BSc in Educational Sciences @ Farhangian University</li>
                        </ul>
                    </h5>
                </div>

                <div>
                    <h4>Skills</h4>
                    <div className='skillsImagesDiv'>
                        <img src={reactjs} className='skillsImages'/>
                        <img src={javascript} className='skillsImages'/>
                        <img src={bootstrap} className='skillsImages'/>
                        <img src={CSS} className='skillsImages'/>
                        <img src={HTML} className='skillsImages'/>
                        <img src={Python} className='skillsImages'/>
                        <img src={Git} className='skillsImages'/>
                        <img src={Github} className='skillsImages'/>
                    </div>
                    
                </div>

                <div>
                    <h4>Research Interests</h4>
                    <a className='googleScholar_link' href='https://scholar.google.com/citations?user=DWPCFAgAAAAJ&hl=en' target='_blank' rel='noreferrer'> <img src={GoogleScholar} className='googleScholarIcon' /> Google Scholar Account</a>
                </div>
            </main>
        </div>
    )
}