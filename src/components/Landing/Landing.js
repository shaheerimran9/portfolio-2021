import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.css';

const Landing = () => {
    return (
        <div className="home-landing">
            <div className="home-landing__text">
                <h2 className="text__primary">Hello!</h2>
                <h2 className="text__secondary">I'm Shaheer. 👋</h2>
            </div>
            <Link to="/">
                <i class="fas fa-chevron-down home-landing__chevron"></i>
            </Link>
        </div>
    );
};

export default Landing;