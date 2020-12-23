import { DOC_SHEDULE } from "../actions/types";

const INITIAL_STATE = {
  loading: true,
  docShedule: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DOC_SHEDULE:
      return { ...state, docShedule: action.payload, loading: false };

    default:
      return state;
  }
};
