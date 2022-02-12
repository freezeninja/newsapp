
import './App.css';

import React, { Component } from 'react';
import Navbar from './componenets/Navbar';
import News from './componenets/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './componenets/About';

export default class App extends Component {
  obj = {
    title: 'News App',
    link1: 'Home',
    link2: 'About'
  }
  constructor(){
    super();
  };

  render() {
    return ( 
      <Router>
        <Navbar deta={this.obj} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<News/>}/>
            <Route exact path="/about" element={<About/>}/>
          </Routes>
        </div>
      </Router>
    );

  }
}

