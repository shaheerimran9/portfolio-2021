import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));