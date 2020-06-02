import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { assignData, collectInfo } from "../store/action/action";
import InputTypes from "../common/InputTypes";
import "../styles/ConfirmationSection.scss";

class ConfirmationSection extends Component {
  submitHandler = (event) => {
    let { data, actions } = this.props;
    let { userDetails, errors, userHistory } = data;
    let formValid = true;
    let flag = [];
    const userObj = { ...userDetails };
    Object.keys(userObj).map(function (keys) {
      if (userObj[keys].length === 0) {
        formValid = false;
        flag.push(formValid);
        return (errors[keys] = "*This Field is required");
      } else {
        formValid = true;
        flag.push(formValid);
        return (errors[keys] = "");
      }
    });
    actions.assignData("errors", { ...errors });
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
        actions.assignData("isEdit", isEdit);
      } else {
        userHistory.push({ ...userObj });
      }
      actions.assignData("userHistory", [...userHistory]);
      this.cancel();
    }
  };
  cancel = () => {
    const { data, actions } = this.props;
    const { userDetails, errors } = data;
    let error = { ...errors };
    let userObj = { ...userDetails };
    Object.keys(userObj).map(function (keys) {
      userObj[keys] = "";
      return userObj;
    });
    let isChecked = false;
    let isEdit = false;
    error = {};
    actions.assignData("errors", error);
    actions.assignData("userDetails", { ...userObj });
    actions.assignData("isChecked", isChecked);
    actions.assignData("isEdit", isEdit);
  };
  render() {
    return (
      <div id="confirmSection">
        <div id="pincode">
          <div>Pincode</div>
          <InputTypes
            type="number"
            id="pincodeField"
            name="pincode"
            onChange={this.props.collectInfo}
            value={this.props.userDetails.pincode}
          />
          <div id="pincodeError" className="error">
            {this.props.userDetails.pincode ? null : this.props.errors.pincode}
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
    actions: bindActionCreators({ assignData, collectInfo }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(ConfirmationSection);
