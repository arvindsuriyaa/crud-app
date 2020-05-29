import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { action1, collectInfo } from "../store/action/action";

class ConfirmationSection extends Component {
  toggleChange = (event) => {
    const { data, actions } = this.props;
    let { userDetails, cachedAddress } = data;
    const isChecked = !event.target.checked;
    actions.action1("isChecked", !isChecked);
    if (!isChecked) {
      const address = { ...userDetails };
      let addressCopy = { ...cachedAddress };
      addressCopy = address["permanentAddress"];
      address["permanentAddress"] = address["communicationAddress"];
      console.log("hey here it is", data);
      actions.action1("cachedAddress", addressCopy);
      actions.action1("userDetails", address);
    } else {
      const address = { ...userDetails };
      address["permanentAddress"] = data["cachedAddress"];
      actions.action1("userDetails", address);
    }
  };
  submitHandler = (event) => {
    let { data, actions } = this.props;
    let { userDetails, errors, userHistory, isChecked } = data;
    let formValid = true;
    let flag = [];
    const userObj = { ...userDetails };
    Object.keys(userObj).map(function (keys) {
      if (
        userObj[keys].length === 0 ||
        userObj[keys] === "Select Country" ||
        userObj[keys] === "Select Organisation" ||
        userObj[keys] === "Select State"
      ) {
        formValid = false;
        flag.push(formValid);
        return (errors[keys] = "*This Field is required");
      } else {
        formValid = true;
        flag.push(formValid);
        return (errors[keys] = "");
      }
    });
    actions.action1("errors", { ...errors });
    let registerCheck = true;
    for (let iterate = 0; iterate < flag.length; iterate++) {
      if (!flag[iterate]) {
        registerCheck = false;
        break;
      }
    }
    if (registerCheck) {
      if (data.isEdit) {
        userHistory.splice(data["index"], 1, { ...userObj });
        const isEdit = false;
        actions.action1("isEdit", isEdit);
      } else {
        userHistory.push({ ...userObj });
      }
      actions.action1("userHistory", [...userHistory]);
      Object.keys(userObj).map(function (keys) {
        if (keys === "country") {
          userObj[keys] = "Select Country";
        } else if (keys === "orgName") {
          userObj[keys] = "Select Organisation";
        } else if (keys === "state") {
          userObj[keys] = "Select State";
        } else {
          userObj[keys] = "";
        }
        return userObj;
      });
      actions.action1("userDetails", { ...userObj });
      isChecked = false;
      actions.action1("isChecked", isChecked);
    }
  };
  cancel = () => {
    const { data, actions } = this.props;
    const { userDetails } = data;
    let userObj = { ...userDetails };
    Object.keys(userObj).map(function (keys) {
      if (keys === "country") {
        userObj[keys] = "Select Country";
      } else if (keys === "orgName") {
        userObj[keys] = "Select Organisation";
      } else if (keys === "state") {
        userObj[keys] = "Select State";
      } else {
        userObj[keys] = "";
      }
      return userObj;
    });
    let isChecked = false;
    let isEdit = false;
    actions.action1("userDetails", { ...userObj });
    actions.action1("isChecked", isChecked);
    actions.action1("isEdit", isEdit);
  };
  render() {
    return (
      <div id="confirmSection">
        <div className="checkBox">
          <input
            type="checkbox"
            id="copy"
            checked={this.props.data.isChecked}
            onChange={(event) => this.toggleChange(event)}
          />
          <div>Permanent Address same as communication address</div>
        </div>
        <div id="pincode">
          <div>Pincode</div>
          <input
            type="number"
            id="pincodeField"
            name="pincode"
            onChange={this.props.collectInfo}
            value={this.props.userDetails.pincode}
          />
          <div id="pincodeError" className="error">
            {this.props.errors.pincode}
          </div>
        </div>
        <div id="submitSection">
          <button
            id="update"
            onClick={this.submitHandler}
            style={
              this.props.data.isEdit
                ? { display: "block" }
                : { display: "none" }
            }
          >
            Update
          </button>
          <button
            id="register"
            style={
              this.props.data.isEdit
                ? { display: "none" }
                : { display: "block" }
            }
            onClick={this.submitHandler}
          >
            Register
          </button>
          <button id="cancel" onClick={this.cancel}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    data: state.reducer,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ action1, collectInfo }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(ConfirmationSection);
