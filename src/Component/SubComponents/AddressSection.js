import React from 'react';

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
  export default AddressSection