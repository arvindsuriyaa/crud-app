import React from "react";
import EmployeeForm from "../Component/EmployeeForm";
import Table from "../Component/Table";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

function LayoutContainer(props) {
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
          return (
            <EmployeeForm
              userDetails={props.userDetails}
              updateUserInfo={props.updateUserInfo}
              errors={props.errors}
              submitHandler={props.submitHandler}
              state={props.state}
              toggleChange={props.toggleChange}
              cancel={props.cancel}
            />
          );
        }}
      />
      <Route
        path="/Table"
        exact
        strict
        render={() => {
          return (
            <Table
              state={props.state}
              userData={props.userData}
              removeData={props.removeData}
              editData={props.editData}
            />
          );
        }}
      />
    </Router>
  );
}

export default LayoutContainer;
