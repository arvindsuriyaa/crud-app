import React from "react";

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
        <button
          id="update"
          onClick={props.submit}
          style={
            props.state.isEdit ? { display: "block" } : { display: "none" }
          }
        >
          Update
        </button>
        <button
          id="register"
          style={
            props.state.isEdit ? { display: "none" } : { display: "block" }
          }
          onClick={props.submit}
        >
          Register
        </button>
        <button id="cancel" onClick={props.cancel}>Cancel</button>
        {/* <button onClick={props.handleClick}>handleClick</button> */}
      </div>
    </div>
  );
}
export default ConfirmationSection;
