import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { action1, collectInfo } from "../store/action/action";

class AddressSection extends Component {
  render() {
    console.log("addSec", this.props);
    let { data } = this.props;
    let { userDetails, errors } = data;
    console.log("AddressUser", userDetails);
    return (
      <div id="address">
        <div className="presentAddress">
          <div>Communication Address:</div>
          <textarea
            id="communicationAddress"
            name="communicationAddress"
            rows="10"
            cols="75"
            onChange={this.props.collectInfo}
            value={userDetails.communicationAddress}
          />
          <div id="communicationAddressError" className="error">
            {errors.communicationAddress}
          </div>
        </div>
        <div className="addressOfStay">
          <div>Permanent Address</div>
          <textarea
            id="permanentAddress"
            name="permanentAddress"
            rows="10"
            cols="75"
            onChange={this.props.collectInfo}
            value={
              data.isChecked
                ? userDetails.communicationAddress
                : userDetails.permanentAddress
            }
            // defaultValue="hello"
          />
          <div id="permanentAddressError" className="error">
            {errors.permanentAddress}
          </div>
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
    actions: bindActionCreators({ action1, collectInfo }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(AddressSection);
