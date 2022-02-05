
import './App.css';

import React, { Component } from 'react';
import Navbar from './componenets/Navbar';
import News from './componenets/News';

export default class App extends Component {
  render() {
    let obj = {
      title: 'News App',
      link1: 'Home',
      link2: 'About'
    }
    return (
      <>
        <Navbar deta={obj}/>
        <div className="container">
          <News/>
        </div>
      </>
    );

  }
}

