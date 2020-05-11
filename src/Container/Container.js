import React, { Component } from "react";
import MainComponents from "../Component/MainComponents";
import Table from "../Component/Table";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div id="title">
            <span>Employee Details</span>
            <div className="link">
              <NavLink
                activeStyle={{
                  color: "black",
                  backgroundColor: "white",
                }}
                to="/Table"
              >
                Table
              </NavLink>
              <NavLink
                activeStyle={{
                  color: "black",
                  backgroundColor: "white",
                }}
                to="/Form"
              >
                Form
              </NavLink>
            </div>
          </div>
          <div className="App-intro">
            <Switch>
              <Route exact path="/Table" />
              <Route path="/Form" />
              <Redirect to="/Table" />
            </Switch>
          </div>
          <Route
            path="/Form"
            exact
            strict
            render={() => {
              return <MainComponents />;
            }}
          />
          <Route
            path="/Table"
            exact
            strict
            render={() => {
              return <Table />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default Container;
