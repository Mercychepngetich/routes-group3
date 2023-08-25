import { Link } from "react-router-dom"

function Mike(){
    return<div>
        <nav className="nav">
            <Link className="blue">About</Link>
            <Link className="blue">Skills</Link>
            <Link className="blue">Contacts</Link>
        </nav>
        <div className="prof">
        <h2>Welcome to my Page</h2>
        <p>Hire me! I am FrontEnd Software Developer with 5yrs experience</p>
        </div>
    
        <section className="skill">
                        <p>My skills:<br/>
                       <ul>
                       <li>Figma</li>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                       </ul>

            </p>
        </section>

        
    </div>
}
export default Mike