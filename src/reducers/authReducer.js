import {
  SIGN_IN,
  SIGN_OUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../actions/types";

// const INITIAL_STATE = {
//   isSignedIn: null,
// };
const INITIAL_STATE = {
  token: localStorage.getItem("token"),
  isSignedIn: null,
  loading: true,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case SIGN_IN:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload, isSignedIn: true, loading: false };

    case REGISTER_FAIL:
    case SIGN_OUT:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return { ...state, token: null, isSignedIn: false, loading: false };
    
    default:
      return state;
  }
};
