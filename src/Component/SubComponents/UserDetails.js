import React from 'react';
import UserInfo from "../SubComponents/UserInfo"
import AboutUser from "../SubComponents/AboutUser"
import ContactUser from "../SubComponents/ContactUser"

function UserDetails(props) {
  return (
    <div id="userDetails">
      <UserInfo
        country={props.Country}
        updateUserInfo={props.updateUserInfo}
        userDetails={props.userDetails}
        error={props.error}
      />
      <AboutUser
        organistation={props.OrgName}
        stateField={props.stateField}
        updateUserInfo={props.updateUserInfo}
        userDetails={props.userDetails}
        error={props.error}
      />
      <ContactUser
        updateUserInfo={props.updateUserInfo}
        userDetails={props.userDetails}
        error={props.error}
      />
    </div>
  );
}
export default UserDetails