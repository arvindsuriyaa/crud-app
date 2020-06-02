import React, { Component } from "react";
// import { UserInfo } from "../Constants/Constant";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { assignData, collectInfo } from "../store/action/action";
import "../styles/Table.scss"

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Gender</th>
        <th>DOB</th>
        <th>Mobile Number</th>
        <th>Email Id</th>
        <th>Edit/Delete</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  console.log("PROPSDATA", props);
  const rows = props.userData.map((row, index) => {
    console.log("row", row);
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          {row.firstName} {row.lastName}
        </td>
        <td>{row.gender}</td>
        <td>{row.dob}</td>
        <td>{row.mobileNumber}</td>
        <td>{row.emailId}</td>
        <td>
          <Link
            to="/Form"
            exact
            strict
            onClick={() => props.editData(index)}
            style={
              props.state.isEdit
                ? { pointerEvents: "none", cursor: "default", color: "black" }
                : { pointerEvents: "all", cursor: "cursor" }
            }
          >
            Edit
          </Link>
          /
          <Link
            onClick={() => props.removeData(index)}
            style={
              props.state.isEdit
                ? { pointerEvents: "none", cursor: "default", color: "black" }
                : { pointerEvents: "all", cursor: "cursor" }
            }
          >
            Delete
          </Link>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const TableFormation = (props) => {
  if (props.userData.length === 0) {
    return <h1>NO DATA FOUND. ENTER FORM.</h1>;
  } else {
    const { userData, removeData, editData, state } = props;
    return (
      <table cellSpacing="0" cellPadding="0">
        <TableHeader />
        <TableBody
          userData={userData}
          removeData={removeData}
          editData={editData}
          state={state}
        />
      </table>
    );
  }
};

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  editData = (index) => {
    const { data, actions } = this.props;
    let { userDetails, userHistory, isEdit } = data;
    userDetails = userHistory[index];
    actions.assignData("userDetails", { ...userDetails });
    isEdit = true;
    actions.assignData("index", index);
    actions.assignData("isEdit", isEdit);
  };
  removeData = (index) => {
    const { data, actions } = this.props;
    let { userHistory } = data;
    userHistory.splice(index, 1);
    actions.assignData("userHistory", userHistory);
  };
  render() {
    const { data } = this.props;
    const { userHistory } = data;
    return (
      <div id="salesOrderTable">
        <h1>Employee Details</h1>
        <TableFormation
          userData={userHistory}
          removeData={this.removeData}
          editData={this.editData}
          state={data}
        />
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

export default connect(mapStateToProps, mapDispachToProps)(Table);
