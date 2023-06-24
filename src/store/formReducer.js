const initialState = {
  name: "",
  age: 0,
  gender: "",
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
