const initialState = {
  userDetails: {
    dob: "",
    country: "Select Country",
    orgName: "Select Organisation",
    firstName: "",
    mobileNumber: "",
    state: "Select State",
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
    case "HANDLE_DATA":
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};
