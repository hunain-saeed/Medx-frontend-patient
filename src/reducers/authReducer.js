import { SIGN_IN, SIGN_OUT, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
    case LOGIN_SUCCESS:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
    case LOGIN_FAIL:
      return { ...state, isSignedIn: false };
    // TODO add tokens
    default:
      return state;
  }
};
