import { PAT_APPLIST, BOOK_APP } from "../actions/types";

const INITIAL_STATE = {
  appList: [],
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PAT_APPLIST:
    case BOOK_APP:
      return {
        ...state,
        appList: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
