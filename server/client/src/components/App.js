import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions"; //get all actions we defined and assign them to the object "actions"

import Header from "./Header";
import Landing from "./Landing";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// actions are assigned to the App component as props
export default connect(null, actions)(App);
