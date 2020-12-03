import axios from "axios";
// Action creators
import { setAlert } from "./alert";
import { SPEC_LIST } from "./types";

// All backend apis
import { SpecList } from "../apis/api";

// Get all Doctors profile
export const getSpecList = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(SpecList);

      dispatch({ type: SPEC_LIST, payload: res.data });
    } catch (err) {
      console.log(err);

      if (err.response) {
        const errors = err.response.data ? err.response.data.errors : null;
        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }
      }
    }
  };
};
