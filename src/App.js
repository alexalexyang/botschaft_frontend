import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import Data from './components/data'
import Map from './components/map'
import Feed from './components/feed'
import About from './components/about'

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/data' component={Data} />
          <Route path='/' exact component={Map} />
          <Route path='/feed' component={Feed} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
