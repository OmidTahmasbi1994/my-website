import image from '../images/photo.jpg'

export const About = ()=>{
    return(
        <div className="originContainer">
            <header className="originHeader">
                <h3>About Me</h3>
            </header>

            <main className="originMain">
            <img src={image} className='image'/>
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
                            <li>BSc in Computer Engineering - PNU</li>
                            <li>BSc in Educational Sciences - Farhangian University</li>
                        </ul>
                    </h5>
                </div>

                <div>
                    <h4>Skills</h4>
                    <h5>React Js - Java Script - Bootstrap - CSS - HTML -<br/>
                        Python Programming - Git - Gihub
                    </h5>
                </div>
            </main>
        </div>
    )
}