import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Order from "./pages/Order";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/order" component={Order} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
