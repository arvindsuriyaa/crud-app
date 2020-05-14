import React, { Component } from "react";
import { UserInfo } from "./Constants/Constant";
import LayoutContainer from "./Container/LayoutContainer";

class Root extends Component {
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
      user: UserInfo,
      index: "",
      isEdit: false,
      address: "",
    };
    console.log("form State", this.state);
    this.collectInfo = this.collectInfo.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.editData = this.editData.bind(this);
  }
  editData = (index) => {
    const { user } = this.state;
    this.setState((prevState) => ({
      userDetails: user[index],
      isEdit: true,
      index: index,
    }));
    console.log("toggle flag", this.state.isEdit);
    console.log("userinfo After splice", UserInfo);
    console.log("Props UserState", this.state);
  };

  removeData = (index) => {
    UserInfo.splice(index, 1);
    this.setState({
      user: UserInfo,
    });
    console.log(UserInfo);
  };

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
  submitHandler = () => {
    let formValid = true;
    let errors = {};
    const obj = this.state.userDetails;
    Object.keys(obj).map(function (keys) {
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
      if (this.state.isEdit) {
        UserInfo.splice(this.state.index, 1, userCollection);
      } else {
        UserInfo.push(userCollection);
      }
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
        isEdit: false,
      });
      console.log(UserInfo);
    }
  };

  cancel = () => {
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
      errors: {},
      isChecked: false,
      user: UserInfo,
      index: "",
      isEdit: false,
    });
  };
  render() {
    return (
      <LayoutContainer
        userDetails={this.state.userDetails}
        updateUserInfo={this.collectInfo}
        errors={this.state.errors}
        submitHandler={this.submitHandler}
        state={this.state}
        toggleChange={this.toggleChange}
        cancel={this.cancel}
        userData={this.state.user}
        removeData={this.removeData}
        editData={this.editData}
      />
    );
  }
}

export default Root;
