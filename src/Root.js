import React, { Component } from "react";
import EmployeeForm from "./Component/EmployeeForm";
import Table from "./Component/Table";
import Layout from "./LayoutContainer/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

class Root extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact strict path="/Form" component={EmployeeForm} />
            <Route exact strict path="/Table" component={Table} />
            <Redirect to="/Table"></Redirect>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default Root;
