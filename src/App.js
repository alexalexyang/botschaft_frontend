import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Data from "./components/data";
import Map from "./components/map";
import Feed from "./components/feed";
import About from "./components/about";
import { ShowDataProvider } from "./components/showDataContext";

function App() {
  return (
    <Router>
      <div className="App">
        <ShowDataProvider>
          <Nav />

          <Switch>
            <Route path="/data" component={Data} />

            <Route path="/" exact component={Map} />

            <Route path="/feed" component={Feed} />
            <Route path="/about" component={About} />
          </Switch>
        </ShowDataProvider>
      </div>
    </Router>
  );
}

export default App;
