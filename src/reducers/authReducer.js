import {
  SIGN_IN,
  SIGN_OUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  PAT_PROFILE,
} from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  loading: true,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, isSignedIn: true, loading: false }; //...action.payload,

    case SIGN_IN:
      return { ...state, isSignedIn: true, loading: false };

    case PAT_PROFILE:
      return {
        ...state,
        isSignedIn: true,
        loading: false,
        user: action.payload,
      };
    // TODO recently added this
    case SIGN_OUT:
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      return { ...state, isSignedIn: false, loading: false, user: null };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      return { ...state, isSignedIn: false, loading: false }; //token: null,

    default:
      return state;
  }
};
