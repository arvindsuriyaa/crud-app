import React, { Component, Fragment } from "react";
import { Country } from "../Constants/Constant";
import { OrgName } from "../Constants/Constant";
import { State } from "../Constants/Constant";
import { UserInfo } from "../Constants/Constant";

function FormSection3(props) {
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

function FormSection2(props) {
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

function FormSection1(props) {
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
          onChange={props.updateUserInfo}
          value={props.userDetails.dob}
        />
        <div id="dobError" className="error">
          {props.error.dob}
        </div>
      </div>
      <div className="countryOptions">
        <div>Country:</div>
        <select
          id="selectCountry"
          onChange={props.updateUserInfo}
          name="country"
          value={props.userDetails.country}
        >
          {props.country.map((item, index) =>
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
          {props.error.country}
        </div>
      </div>
    </div>
  );
}

function ConfirmationSection(props) {
  return (
    <div id="confirmSection">
      <div className="checkBox">
        <input
          type="checkbox"
          id="copy"
          checked={props.state.isChecked}
          onChange={props.toggleChange}
        />
        <div>Permanent Address same as communication address</div>
      </div>
      <div id="pincode">
        <div>Pincode</div>
        <input
          type="number"
          id="pincodeField"
          name="pincode"
          onChange={props.updateUserInfo}
          value={props.userDetails.pincode}
        />
        <div id="pincodeError" className="error">
          {props.error.pincode}
        </div>
      </div>
      <div id="submitSection">
        <button id="update">Update</button>
        <button id="register" onClick={props.submit}>
          Register
        </button>
        <button id="cancel">Cancel</button>
      </div>
    </div>
  );
}

function AddressSection(props) {
  return (
    <div id="address">
      <div className="presentAddress">
        <div>Communication Address:</div>
        <textarea
          id="communicationAddress"
          name="communicationAddress"
          rows="10"
          cols="75"
          onChange={props.updateUserInfo}
          value={props.userDetails.communicationAddress}
        />
        <div id="communicationAddressError" className="error">
          {props.error.communicationAddress}
        </div>
      </div>
      <div className="addressOfStay">
        <div>Permanent Address</div>
        <textarea
          id="permanentAddress"
          name="permanentAddress"
          rows="10"
          cols="75"
          onChange={props.updateUserInfo}
          value={props.userDetails.permanentAddress}
        />
        <div id="permanentAddressError" className="error">
          {props.error.permanentAddress}
        </div>
      </div>
    </div>
  );
}
function UserDetails(props) {
  return (
    <div id="userDetails">
      <FormSection1
        country={props.Country}
        updateUserInfo={props.updateUserInfo}
        userDetails={props.userDetails}
        error={props.error}
      />
      <FormSection2
        organistation={props.OrgName}
        stateField={props.stateField}
        updateUserInfo={props.updateUserInfo}
        userDetails={props.userDetails}
        error={props.error}
      />
      <FormSection3
        updateUserInfo={props.updateUserInfo}
        userDetails={props.userDetails}
        error={props.error}
      />
    </div>
  );
}

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {
        dob: "",
        country: "Select Country",
        orgName: "Select Organisation",
        firstName: "",
        mobileNumber: "",
        state: "Select State",
        lastName: "",
        gender: "",
        emailId: "",
        city: "",
        communicationAddress: "",
        permanentAddress: "",
        pincode: "",
      },
      errors: {},
      isChecked: false,
      address: "",
    };
    this.collectInfo = this.collectInfo.bind(this);
  }

  collectInfo = (event) => {
    const { userDetails } = { ...this.state };
    const value = event.target.value;
    const name = event.target.name;
    const info = userDetails;
    info[name] = value;
    this.setState({
      userDetails: info,
    });
  };
  toggleChange = () => {
    debugger;
    const user = this.state.userDetails;
    let address = this.state.address;
    this.setState({
      isChecked: !this.state.isChecked,
    });
    if (!this.state.isChecked) {
      address = user["permanentAddress"];
      this.setState({
        address: address,
      });
      user["permanentAddress"] = user["communicationAddress"];
      this.setState({
        userDetails: user,
      });
    } else {
      user["permanentAddress"] = address;
      this.setState({
        userDetails: user,
      });
    }
  };
  submitHandler = (event) => {
    let formValid = true;
    // const value = event.target.value;
    let errors = {};
    // let fields = this.state.userDetails;//
    const obj = this.state.userDetails;
    Object.keys(obj).map(function (keys) {
      // debugger;
      // console.log(obj[keys].length);
      if (obj[keys].length === 0) {
        formValid = false;
        return (errors[keys] = "*This Field is required");
      } else if (
        obj[keys] === "Select Country" ||
        obj[keys] === "Select Organisation" ||
        obj[keys] === "Select State"
      ) {
        formValid = false;
        return (errors[keys] = "*This Field is required");
      }
      return null;
    });
    if (!formValid) {
      this.setState({
        errors: errors,
      });
    } else {
      const userCollection = Object.assign({}, this.state.userDetails);
      UserInfo.push(userCollection);
      errors = {};
      this.setState({
        userDetails: {
          dob: "",
          country: "Select Country",
          orgName: "Select Organisation",
          firstName: "",
          mobileNumber: "",
          state: "Select State",
          lastName: "",
          gender: "",
          emailId: "",
          city: "",
          communicationAddress: "",
          permanentAddress: "",
          pincode: "",
        },
        errors: errors,
        isOnSelect: false,
      });
      console.log(UserInfo);
    }
    // console.log(this.state.errors);
  };

  render() {
    return (
      <Fragment>
        <UserDetails
          userDetails={this.state.userDetails}
          Country={Country}
          OrgName={OrgName}
          updateUserInfo={this.collectInfo}
          stateField={State}
          error={this.state.errors}
        />
        <AddressSection
          userDetails={this.state.userDetails}
          updateUserInfo={this.collectInfo}
          error={this.state.errors}
        />
        <ConfirmationSection
          updateUserInfo={this.collectInfo}
          submit={this.submitHandler}
          userDetails={this.state.userDetails}
          error={this.state.errors}
          state={this.state}
          toggleChange={this.toggleChange}
        />
      </Fragment>
    );
  }
}

export default Container;
