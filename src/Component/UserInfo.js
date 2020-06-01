import React from "react";
import SelectBox from "../common/SelectBox";
import InputTypes from "../common/InputTypes";
import { Country } from "../Constants/Constant";
import "../styles/UserInfo.css";

function UserInfo(props) {
  return (
    <div className="formSection1">
      <div className="profileSection">
        <div className="photo"></div>
        <button id="upload">upload</button>
      </div>
      <div className="dob">
        <div>Date of Birth:</div>
        <InputTypes
          type="date"
          id="date"
          name="dob"
          onChange={props.collectInfo}
          value={props.userDetails.dob}
        />
        <div id="dobError" className="error">
          {props.userDetails.dob ? null : props.errors.dob}
        </div>
      </div>
      <div className="countryOptions">
        <div>Country:</div>
        <SelectBox
          id="selectCountry"
          name="country"
          onChange={props.collectInfo}
          value={props.userDetails.country}
          elements={Country}
        />
        <div id="countryError" className="error">
          {props.userDetails.country ? null : props.errors.country}
        </div>
      </div>
    </div>
  );
}
export default UserInfo;
