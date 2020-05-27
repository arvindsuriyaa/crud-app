import React, { Component, Fragment } from "react";
import UserDetails from "./UserDetails";
import AddressSection from "./AddressSection";
import ConfirmationSection from "./ConfirmationSection";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { action1 } from "../store/action/action";

class EmployeeForm extends Component {
  collectInfo = (event) => {
    let { data, actions } = this.props;
    let { userDetails } = data;
    let name = event.target.name;
    let value = event.target.value;
    userDetails[name] = value;
    actions.action1("userDetails", { ...userDetails, [name]: value });
  };

  render() {
    let { data } = this.props;
    let { userDetails, errors } = data;
    return (
      <Fragment>
        <UserDetails
          userDetails={userDetails}
          errors={errors}
          collectInfo={this.collectInfo}
        />
        <AddressSection
          userDetails={userDetails}
          errors={errors}
          collectInfo={this.collectInfo}
          data={data}
        />
        <ConfirmationSection
          userDetails={userDetails}
          errors={errors}
          collectInfo={this.collectInfo}
          data={data}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.reducer,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ action1 }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(EmployeeForm);
