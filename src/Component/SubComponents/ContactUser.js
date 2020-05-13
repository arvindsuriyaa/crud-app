import React from 'react';

function ContactUser(props) {
    return (
      <div className="formSection3">
        <div className="lastName">
          <div>Last Name:</div>
          <input
            type="text"
            id="lastNameField"
            name="lastName"
            onChange={props.updateUserInfo}
            value={props.userDetails.lastName}
          />
          <div id="lastNameError" className="error">
            {props.error.lastName}
          </div>
        </div>
        <div className="gender">
          <div>Gender</div>
          <form id="genderCheck">
            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              checked={props.userDetails.gender === "male"}
              onChange={props.updateUserInfo}
            />
            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              onChange={props.updateUserInfo}
              checked={props.userDetails.gender === "female"}
            />
          </form>
          <div id="genderError" className="error">
            {props.error.gender}
          </div>
        </div>
        <div className="emailID">
          <div>Email ID:</div>
          <input
            id="emailIdField"
            type="text"
            name="emailId"
            onChange={props.updateUserInfo}
            value={props.userDetails.emailId}
          />
          <div id="emailError" className="error">
            {props.error.emailId}
          </div>
        </div>
        <div className="city">
          <div>City:</div>
          <input
            type="text"
            id="cityInput"
            name="city"
            onChange={props.updateUserInfo}
            value={props.userDetails.city}
          />
          <div id="cityError" className="error">
            {props.error.city}
          </div>
        </div>
      </div>
    );
  }
  export default ContactUser