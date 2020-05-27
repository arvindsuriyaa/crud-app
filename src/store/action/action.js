// import UserDetails from "../../Component/UserDetails";

export const action1 = (name, value) => ({
  type: "HANDLE_DATA",
  payload: { name: name, value: value },
});

export const collectInfo = (event) => {
  return (dispatch, getState) => {
    const { userDetails } = getState().reducer;
    dispatch(
      action1("userDetails", {
        ...userDetails,
        [event.target.name]: event.target.value,
      })
    );
  };
};
