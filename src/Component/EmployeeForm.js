import React, { Component, Fragment } from "react";
import { Country } from "../Constants/Constant";
import { OrgName } from "../Constants/Constant";
import { State } from "../Constants/Constant";
import UserDetails from "../Component/SubComponents/UserDetails";
import AddressSection from "../Component/SubComponents/AddressSection";
import ConfirmationSection from "../Component/SubComponents/ConfirmationSection";

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props.state);
  }
  render() {
    return (
      <Fragment>
        <UserDetails
          userDetails={this.props.userDetails}
          Country={Country}
          OrgName={OrgName}
          updateUserInfo={this.props.updateUserInfo}
          stateField={State}
          error={this.props.errors}
        />
        <AddressSection
          userDetails={this.props.userDetails}
          updateUserInfo={this.props.updateUserInfo}
          error={this.props.errors}
        />
        <ConfirmationSection
          updateUserInfo={this.props.updateUserInfo}
          submit={this.props.submitHandler}
          userDetails={this.props.userDetails}
          error={this.props.errors}
          state={this.props.state}
          toggleChange={this.props.toggleChange}
          cancel={this.props.cancel}
        />
      </Fragment>
    );
  }
}

export default EmployeeForm;
