import React from 'react';
import { Link } from 'react-router-dom';

import './About.css';

const About = () => {
    return (
        <section className="home-about" id="about">
            <div className="home-about__details">
                <p className="details__introduction">It's nice to meet you! I'm an aspiring web developer based in Richmond, VA. I enjoy developing modern websites that utilize the latest technologies.</p>
                <h3 className="details__technologies-heading">Here are some of the technologies I have been utilizing recently:</h3>
                <ul className="details__technologies-list">
                    <li>
                        Semantic HTML
                        <i class="fab fa-html5"></i>
                    </li>
                    <li>
                        Responsive CSS
                        <i class="fab fa-css3-alt"></i>
                    </li>
                    <li>
                        JavaScript
                        <i class="fab fa-js"></i>
                    </li>
                    <li>
                        ReactJS
                        <i class="fab fa-react"></i>
                    </li>
                    <li>
                        Git/Github
                        <i class="fab fa-git-alt"></i>
                    </li>
                </ul>
                <a href="mailto:shaheerimran@icloud.com" className="details__btn">Contact Me</a>
                <Link to="/projects" className="details__btn btn-attention">View My Work</Link>
            </div>
            <div className="home-about__image"></div>
        </section>
    );
};

export default About;