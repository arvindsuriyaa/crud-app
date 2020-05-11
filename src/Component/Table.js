import React, { Component } from "react";
import { UserInfo } from "../Constants/Constant";

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
          <button onClick={() => props.removeData(index)}>Delete</button>
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
    const { userData, removeData } = props;
    return (
      <table cellSpacing="0" cellPadding="0">
        <TableHeader />
        <TableBody userData={userData} removeData={removeData} />
      </table>
    );
  }
};

class Table extends Component {
  state = {
    user: UserInfo,
    isEdit: false,
  };

  removeData = (index) => {
    const { user } = this.state;

    this.setState({
      user: user.filter((character, i) => {
        return i !== index;
      }),
    });
  };
  render() {
    console.log("infoArray", UserInfo);
    return (
      <div id="salesOrderTable">
        <h1>Employee Details</h1>
        <TableFormation
          userData={this.state.user}
          removeData={this.removeData}
        />
      </div>
    );
  }
}

export default Table;
