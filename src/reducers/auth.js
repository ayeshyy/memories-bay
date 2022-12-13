import { AUTH, LOGOUT } from "../constants/actionTypes";

//reducers for auth type reducers take two params one is state and other is action it will change the state accoding to action;

const auth = (state = { authData: null }, action) => {
  // changing state according to action type;
  switch (action.type) {
    case AUTH:
      // in case of auth just storing the data to localStorage;
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data };

    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null }

    default:
      return state;
  }
};

export default auth;
