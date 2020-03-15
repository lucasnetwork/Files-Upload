import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import '../../styles/footer.scss'
export default () => (
    <footer className="footer">
        <p>Copyright 2019-2020, Data Files</p>
        <aside>
            <Link>
                <li>wiki</li>
            </Link>
            <Link>
                <li>models</li>
            </Link>
            <a href="https://twitter.com/LucasRi25613630"><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="https://github.com/lucasnetwork"><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://www.linkedin.com/in/lucas-ribeiro-22338b178/"><FontAwesomeIcon icon={faLinkedin}/></a>
        </aside>
    </footer>
)