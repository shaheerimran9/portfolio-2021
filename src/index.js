import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Container from './components/Container/Container';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Landing />
      <Container >
        <About />
      </Container>
      <Footer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));