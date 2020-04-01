import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from './routes/Routes';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Routes />
    </div>
  </Router>
);

export default App;
