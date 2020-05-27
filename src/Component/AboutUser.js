import React from "react";
import { OrgName } from "../Constants/Constant";
import { State } from "../Constants/Constant";

function AboutUser(props) {
  return (
    <div className="formSection2">
      <div className="organisation">
        <div>Organisation Name:</div>
        <select
          id="selectOrganisation"
          onChange={props.collectInfo}
          name="orgName"
          value={props.userDetails.orgName}
        >
          {OrgName.map((item, index) =>
            index === 0 ? (
              <option key={index} value={item} disabled>
                {item}
              </option>
            ) : (
              <option key={index} value={item}>
                {item}
              </option>
            )
          )}
        </select>
        <div id="firstNameError" className="error">
          {props.errors.orgName}
        </div>
      </div>
      <div className="firstName">
        <div>First Name:</div>
        <input
          type="text"
          id="firstNameField"
          name="firstName"
          onChange={props.collectInfo}
          value={props.userDetails.firstName}
        />
        <div id="firstNameError" className="error">
          {props.errors.firstName}
        </div>
      </div>
      <div className="mobileNumber">
        <div>Mobile Number:</div>
        <input
          type="number"
          id="mobileField"
          name="mobileNumber"
          onChange={props.collectInfo}
          value={props.userDetails.mobileNumber}
        />
        <div id="mobileError" className="error">
          {props.errors.mobileNumber}
        </div>
      </div>
      <div className="state">
        <div>State:</div>
        <select
          id="selectState"
          name="state"
          onChange={props.collectInfo}
          value={props.userDetails.state}
        >
          {State.map((item, index) =>
            index === 0 ? (
              <option key={index} value={item} disabled>
                {item}
              </option>
            ) : (
              <option key={index} value={item}>
                {item}
              </option>
            )
          )}
        </select>
        <div id="stateError" className="error">
          {props.errors.state}
        </div>
      </div>
    </div>
  );
}

export default AboutUser;
