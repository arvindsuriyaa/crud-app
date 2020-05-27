import React from "react";

import { Country } from "../Constants/Constant";

function UserInfo(props) {
  return (
    <div className="formSection1">
      <div className="profileSection">
        <div className="photo"></div>
        <button id="upload">upload</button>
      </div>
      <div className="dob">
        <div>Date of Birth:</div>
        <input
          type="date"
          id="date"
          name="dob"
          onChange={props.collectInfo}
          value={props.userDetails.dob}
        />
        <div id="dobError" className="error">
          {props.errors.dob}
        </div>
      </div>
      <div className="countryOptions">
        <div>Country:</div>
        <select
          id="selectCountry"
          name="country"
          onChange={props.collectInfo}
          value={props.userDetails.country}
        >
          {Country.map((item, index) =>
            index === 0 ? (
              <option value={item} key={index} disabled>
                {item}
              </option>
            ) : (
              <option key={index} value={item}>
                {item}
              </option>
            )
          )}
        </select>
        <div id="countryError" className="error">
          {props.errors.country}
        </div>
      </div>
    </div>
  );
}
export default UserInfo;
