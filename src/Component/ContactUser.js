import React from "react";
import InputTypes from "../common/InputTypes";
import "../styles/ContactUser.scss";

function ContactUser(props) {
  return (
    <div className="formSection3">
      <div className="lastName">
        <div>Last Name:</div>
        <InputTypes
          type="text"
          id="lastNameField"
          name="lastName"
          onChange={props.collectInfo}
          value={props.userDetails.lastName}
        />
        <div id="lastNameError" className="error">
          {props.userDetails.lastName ? null : props.errors.lastName}
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
            onChange={props.collectInfo}
          />
          <span>Female</span>
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            onChange={props.collectInfo}
            checked={props.userDetails.gender === "female"}
          />
        </form>
        <div id="genderError" className="error">
          {props.userDetails.gender ? null : props.errors.gender}
        </div>
      </div>
      <div className="emailID">
        <div>Email ID:</div>
        <InputTypes
          id="emailIdField"
          type="text"
          name="emailId"
          onChange={props.collectInfo}
          value={props.userDetails.emailId}
        />
        <div id="emailError" className="error">
          {props.userDetails.emailId ? null : props.errors.emailId}
        </div>
      </div>
      <div className="city">
        <div>City:</div>
        <InputTypes
          type="text"
          id="cityInput"
          name="city"
          onChange={props.collectInfo}
          value={props.userDetails.city}
        />
        <div id="cityError" className="error">
          {props.userDetails.city ? null : props.errors.city}
        </div>
      </div>
    </div>
  );
}
export default ContactUser;
