import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Container from './components/Container/Container';
import About from './components/About/About';
import Project from './components/Project/Project';
import royalraja from './img/royalraja.png';
import movieSurfer from './img/moviesurfer.png';
import Footer from './components/Footer/Footer';

import './index.css';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Landing />
          <Container >
            <About />
          </Container>
          <Footer />
        </Route>
        <Route path="/projects">
          <Navbar />
          <Container >
            <Project
              background={'radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,209,67,1) 0%, rgba(255,145,83,1) 90% )'}
              title="Royal Raja"
              description="A modern restaurant website."
              imgSrc={royalraja}
              hrefSite="https://shaheer-royalraja.netlify.app/"
              hrefCode="https://github.com/shaheerimran9/royal-raja"
            />
            <Project
              background={"linear-gradient(300deg,  rgba(255,196,254,1) 9.6%, rgba(251,229,123,1) 91%)"}
              title="Movie Surfer"
              description="A movie database website."
              imgSrc={movieSurfer}
              hrefSite="https://shaheer-moviesurfer.netlify.app"
              hrefCode="https://github.com/shaheerimran9/Movie-Surfer"
            />
          </Container>
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));