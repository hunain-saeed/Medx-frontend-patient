import { GET_CUR_DOC } from "../actions/types";

const INITIAL_STATE = {
  loading: true,
  curDoc: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CUR_DOC:
      return { ...state, curDoc: action.payload, loading: false };

    default:
      return state;
  }
};
