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
                    <p>
                        Omid Tahmasebi Boldaji<br/>
                        Born in March/1994 in Iran<br/>   
                    </p>
                </div>

                <div>
                    <h4>Education</h4>
                    <ul>
                        <li>Computer Engineering: PNU-2025.</li>
                        <li>Educational Sciences: Farhangian Uni-2016.</li>
                    </ul>
                </div>

                <div>
                    <h4>Skills</h4>
                    <h6>React Js - Java Script - Bootstrap - CSS - HTML -<br/>
                        Python Programming - Git - Gihub
                    </h6>
                </div>
            </main>
        </div>
    )
}