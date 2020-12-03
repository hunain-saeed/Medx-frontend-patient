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
  // token: localStorage.getItem("token"),
  isSignedIn: null,
  loading: true,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state,  isSignedIn: true, loading: false };  //...action.payload,

    case SIGN_IN:
      return { ...state, isSignedIn: true, loading: false };

    case REGISTER_FAIL:
    case SIGN_OUT:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return { ...state,  isSignedIn: false, loading: false };  //token: null,

    default:
      return state;
  }
};
