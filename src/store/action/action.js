import EMPLOYEE_DETAILS  from "../Types/types";

export const assignData = (name, value) => ({
  type: EMPLOYEE_DETAILS,
  payload: { name: name, value: value },
});

export const collectInfo = (event) => {
  return (dispatch, getState) => {
    const { userDetails } = getState().reducer;
    dispatch(
      assignData("userDetails", {
        ...userDetails,
        [event.target.name]: event.target.value,
      })
    );
  };
};
