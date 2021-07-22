import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import MobileNav from '../MobileNav/MobileNav';
import './Navbar.css';

const Navbar = () => {
    const [mobileView, setMobileView] = useState(false);

    const toggleView = () => {
        setMobileView(!mobileView);
    };

    return (
        <header className="main-header">
            <nav className="main-nav">
                <Link to="/" className="main-nav__img-wrapper">
                    <img src="/img/nav-image.png" alt="person waving" className="img-wrapper__img" />
                    <h2 className="img-wrapper__title">Shaheer Imran</h2>
                </Link>
                <ul className="main-nav__links">
                    <li>
                        <Link to="/projects">Projects</Link>
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
                <i className="fas fa-bars nav-toggle" onClick={toggleView}></i>
            </nav>
            <MobileNav isMobileView={mobileView} toggle={toggleView} />
        </header>
    );
};

export default Navbar;