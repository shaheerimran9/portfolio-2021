import React from 'react';
import { Link } from 'react-router-dom';

import './MobileNav.css';

const MobileNav = (props) => {

    const handleClick = () => {
        props.toggle();
    };

    return (
        <nav className="mobile-nav" style={{ display: props.isMobileView === true ? 'block' : 'none' }}>
            <i className="fas fa-times mobile-nav__toggle" onClick={handleClick}></i>
            <ul className="mobile-nav__links">
                <li>
                    <Link to="/" onClick={handleClick}>Home</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={handleClick}>Projects</Link>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/shaheerimran">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/shaheerimran9">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="mailto:shaheerimran@icloud.com">
                        <i class="fas fa-envelope"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
};

export default MobileNav;