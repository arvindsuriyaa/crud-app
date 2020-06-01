import React from "react";
import "../styles/AboutUser.css";
import { OrgName } from "../Constants/Constant";
import { State } from "../Constants/Constant";
import SelectBox from "../common/SelectBox";
import InputTypes from "../common/InputTypes";

function AboutUser(props) {
  return (
    <div className="formSection2">
      <div className="organisation">
        <div>Organisation Name:</div>
        <SelectBox
          id="selectOrganisation"
          onChange={props.collectInfo}
          name="orgName"
          value={props.userDetails.orgName}
          elements={OrgName}
        />
        <div id="firstNameError" className="error">
          {props.userDetails.orgName ? null : props.errors.orgName}
        </div>
      </div>
      <div className="firstName">
        <div>First Name:</div>
        <InputTypes
          type="text"
          id="firstNameField"
          name="firstName"
          onChange={props.collectInfo}
          value={props.userDetails.firstName}
        />
        <div id="firstNameError" className="error">
          {props.userDetails.firstName ? null : props.errors.firstName}
        </div>
      </div>
      <div className="mobileNumber">
        <div>Mobile Number:</div>
        <InputTypes
          type="number"
          id="mobileField"
          name="mobileNumber"
          onChange={props.collectInfo}
          value={props.userDetails.mobileNumber}
        />
        <div id="mobileError" className="error">
          {props.userDetails.mobileNumber ? null : props.errors.mobileNumber}
        </div>
      </div>
      <div className="state">
        <div>State:</div>
        <SelectBox
          id="selectState"
          name="state"
          onChange={props.collectInfo}
          value={props.userDetails.state}
          elements={State}
        />
        <div id="stateError" className="error">
          {props.userDetails.state ? null : props.errors.state}
        </div>
      </div>
    </div>
  );
}

export default AboutUser;
