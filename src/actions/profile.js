// TODO complete it
import axios from "axios";
// Action creators
import { setAlert } from "./alert";
import { GET_DOCTORS } from "./types";

// All backend apis
import { DocList } from "../apis/api";

// Get all Doctors profile
export const getDoctors = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(DocList);

      dispatch({ type: GET_DOCTORS, payload: res.data });
    } catch (err) {
      console.log(err);
      // const errors = (err.response.data ? err.response.data.errors : null) ;
      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      // }
    }
  };
};
