import React, { Component } from "react";
import EmployeeForm from "../Component/EmployeeForm";
import Table from "../Component/Table";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

class LayoutContainer extends Component {
  render() {
    return (
      <Router>
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
            return <EmployeeForm />;
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
      </Router>
    );
  }
}

export default LayoutContainer;
