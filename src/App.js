
import './App.css';

import React, { Component } from 'react';
import Navbar from './componenets/Navbar';
import News from './componenets/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Headlines from './componenets/Headlines';
import Headnews from './componenets/Headnews';
import ScrollTop from './componenets/ScrollTop';

export default class App extends Component {
  obj = {
    title: 'News App',
    link1: 'Everything',
    link2: 'Top Headlines'
  }
  // constructor(){
  //   super();
  // };

  render() {
    return (
      <Router>
        <Navbar deta={this.obj} />
        {/* <div className="container"> */}
          <Routes>
            <Route exact path="/" element={<News />} />
            <Route exact path="/top_headlines" element={<Headlines key="headlines"/>}>
              <Route exact path="/top_headlines/" element={<Headnews key="0" category="general"/>} />
              <Route exact path="business" element={<Headnews  key="1" category="business"/>} />
              <Route exact path="entertainment" element={<Headnews key="2" category="entertainment"/>} />
              <Route exact path="health" element={<Headnews key="3" category="health"/>} />
              <Route exact path="science" element={<Headnews key="4" category="science"/>} />
              <Route exact path="technology" element={<Headnews key="5" category="technology"/>} />
            </Route>
          </Routes>
        {/* </div> */}
        <ScrollTop/>
      </Router>
    );
  }
}

