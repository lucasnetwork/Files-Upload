import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/footer.scss'
export default () => (
    <footer className="footer">
        <p>Copyright 2003-2020, The VG Resource</p>
        <aside>
            <Link>
                <li>wiki</li>
            </Link>
            <Link>
                <li>sound</li>
            </Link>
            <Link>
                <li>models</li>
            </Link>
        </aside>
    </footer>
)