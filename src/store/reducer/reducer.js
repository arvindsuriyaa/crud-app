import EMPLOYEE_DETAILS from "../Types/types"

const initialState = {
  userDetails: {
    dob: "",
    country: "",
    orgName: "",
    firstName: "",
    mobileNumber: "",
    state: "",
    lastName: "",
    gender: "",
    emailId: "",
    city: "",
    communicationAddress: "",
    permanentAddress: "",
    pincode: "",
  },
  cachedAddress: "",
  errors: {},

  isChecked: false,
  index: null,
  isEdit: false,
  userHistory: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_DETAILS:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};
