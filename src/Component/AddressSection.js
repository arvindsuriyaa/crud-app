import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../styles/AddressSection.css";
import { assignData, collectInfo } from "../store/action/action";

class AddressSection extends Component {
  toggleChange = (event) => {
    const { data, actions } = this.props;
    let { userDetails, cachedAddress } = data;
    const isChecked = !event.target.checked;
    actions.assignData("isChecked", !isChecked);
    if (!isChecked) {
      const address = { ...userDetails };
      let addressCopy = { ...cachedAddress };
      addressCopy = address["permanentAddress"];
      address["permanentAddress"] = address["communicationAddress"];
      console.log("hey here it is", data);
      actions.assignData("cachedAddress", addressCopy);
      actions.assignData("userDetails", address);
    } else {
      const address = { ...userDetails };
      address["permanentAddress"] = data["cachedAddress"];
      actions.assignData("userDetails", address);
    }
  };
  render() {
    console.log("addSec", this.props);
    let { data } = this.props;
    let { userDetails } = data;
    console.log("AddressUser", userDetails);
    return (
      <div id="addressSection">
        <div id="address">
          <div className="presentAddress">
            <div>Communication Address:</div>
            <textarea
              id="communicationAddress"
              name="communicationAddress"
              onChange={this.props.collectInfo}
              value={userDetails.communicationAddress}
            />
            <div id="communicationAddressError" className="error">
              {this.props.userDetails.communicationAddress
                ? null
                : this.props.errors.communicationAddress}
            </div>
          </div>
          <div className="addressOfStay">
            <div>Permanent Address</div>
            <textarea
              id="permanentAddress"
              name="permanentAddress"
              onChange={this.props.collectInfo}
              value={
                data.isChecked
                  ? userDetails.communicationAddress
                  : userDetails.permanentAddress
              }
            />
            <div id="permanentAddressError" className="error">
              {this.props.userDetails.permanentAddress
                ? null
                : this.props.errors.permanentAddress}
            </div>
          </div>
        </div>
        <div className="checkBox">
          <input
            type="checkbox"
            id="copy"
            checked={this.props.data.isChecked}
            onChange={(event) => this.toggleChange(event)}
          />
          <div>Permanent Address same as communication address</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.reducer,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ assignData, collectInfo }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(AddressSection);
