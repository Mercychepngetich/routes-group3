import { Link } from "react-router-dom"

function Mercy(){
    return<div>
        <nav className="nav-links">
            <Link className="red">Projects</Link>
            <Link className="red">Resume</Link>
            <Link className="red">Contacts</Link>
        </nav>
        <div className="myname">
        <h2>Mercy Chepngetich</h2>
        <p>FrontEnd Software Developer</p>
        </div>
        <div className="paragraph">
            <p>Rising Software Developer at Moringa School <br/>
             with career interest in tech,sports and music.
             </p>
        </div>
        <section className="intro">
            <h3>Introduction</h3>
            <p>I build accessible, inclusive products and digital experiences for the web.<br/>
                I am well conversant with:<br/>
                       <ul>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                       </ul>

            </p>
        </section>

        
    </div>
}
export default Mercy