import React from 'react';

function AboutUser(props) {
    return (
      <div className="formSection2">
        <div className="organisation">
          <div>Organisation Name:</div>
          <select
            id="selectOrganisation"
            onChange={props.updateUserInfo}
            name="orgName"
            value={props.userDetails.orgName}
          >
            {props.organistation.map((item, index) =>
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
            {props.error.orgName}
          </div>
        </div>
        <div className="firstName">
          <div>First Name:</div>
          <input
            type="text"
            id="firstNameField"
            name="firstName"
            onChange={props.updateUserInfo}
            value={props.userDetails.firstName}
          />
          <div id="firstNameError" className="error">
            {props.error.firstName}
          </div>
        </div>
        <div className="mobileNumber">
          <div>Mobile Number:</div>
          <input
            type="number"
            id="mobileField"
            name="mobileNumber"
            onChange={props.updateUserInfo}
            value={props.userDetails.mobileNumber}
          />
          <div id="mobileError" className="error">
            {props.error.mobileNumber}
          </div>
        </div>
        <div className="state">
          <div>State:</div>
          <select
            id="selectState"
            name="state"
            onChange={props.updateUserInfo}
            value={props.userDetails.state}
          >
            {props.stateField.map((item, index) =>
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
            {props.error.state}
          </div>
        </div>
      </div>
    );
  }
  export default AboutUser