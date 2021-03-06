import { GET_DOCTORS, GET_CUR_DOC } from "../actions/types";

const INITIAL_STATE = {
  docList: [],
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DOCTORS:
      return { ...state, docList: action.payload, loading: false };

    default:
      return state;
  }
};
