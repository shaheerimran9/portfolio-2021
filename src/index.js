import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';

import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Landing />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));