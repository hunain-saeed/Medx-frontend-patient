// TODO get current log in user profile
import axios from "axios";
// Action creators
import { setAlert } from "./alert";
import {
  PAT_APPLIST,
  NULL_APP,
  GET_DOCTORS,
  DOC_SHEDULE,
  GET_CUR_DOC,
} from "./types";

// All backend apis
import { AppointList, DocList, CurDoc, Shedule } from "../apis/api";

// Patient appointment list
export const appList = () => {
  return async (dispatch) => {
    if (localStorage.getItem("token") !== null) {
      const token = await localStorage.getItem("token");
      const config2 = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      try {
        const res = await axios.get(AppointList, config2);
        console.log(res);
        dispatch({ type: PAT_APPLIST, payload: res.data });
      } catch (err) {
        console.error(err);

        if (err.response) {
          const errors = err.response.data ? err.response.data.errors : null;
          if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
          }
        }
      }
    }
  };
};

// Get all Doctors profile
export const getDoctors = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(DocList);

      dispatch({ type: GET_DOCTORS, payload: res.data });
    } catch (err) {
      console.error(err);

      if (err.response) {
        const errors = err.response.data ? err.response.data.errors : null;
        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }
      }
    }
  };
};

// Get perticular doc shedule
export const getCurDoc = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(CurDoc + id);

      dispatch({ type: GET_CUR_DOC, payload: res.data });
    } catch (err) {
      console.error(err);

      if (err.response) {
        const errors = err.response.data ? err.response.data.errors : null;
        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }
      }
    }
  };
};

// Get perticular doc shedule
export const getDocShedule = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(Shedule + id);

      dispatch({ type: DOC_SHEDULE, payload: res.data });
    } catch (err) {
      console.error(err);

      if (err.response) {
        const errors = err.response.data ? err.response.data.errors : null;
        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }
      }
    }
  };
};
