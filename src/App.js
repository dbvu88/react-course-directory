import React, { Component } from 'react';

import NotFound from './components/NotFound'
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Teachers from './components/Teachers';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

const App = () => (
  <Router>
    <div className="container">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={ () => <About title="About Me" />} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default App;
