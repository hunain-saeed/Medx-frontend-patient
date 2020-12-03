import { SPEC_LIST } from "../actions/types";

const INITIAL_STATE = {
  specList: [],
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SPEC_LIST:
      return { ...state, specList: action.payload, loading: false };

    default:
      return state;
  }
};
