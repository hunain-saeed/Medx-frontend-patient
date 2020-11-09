import axios from "axios";
// Action creators
import { setAlert } from "./alert";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
} from "./types";
// All backend apis
import { Register, Login } from "../apis/api";

import setAuthToken from '../utils/setAuthToken'

// Global variable
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// // Load User
// export const loadUser= ()=>{
//   return async (dispatch) => {
//     if(localStorage.token){
//       setAuthToken(localStorage.token)
//     }
//     try {
      
//     } catch (err) {
      
//     }
//   }
// }

// Register User
export const register = (user, name) => {
  return async (dispatch) => {
    const body = JSON.stringify(user);
    try {
      const res = await axios.post(Register + name, body, config);

      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({ type: REGISTER_FAIL });
    }
  };
};

// Login User
export const login = ({ email, password }, name) => {
  return async (dispatch) => {
    const body = JSON.stringify({ email, password });
    try {
      const res = await axios.post(Login + name, body, config);
      // TODO remove success alert msg and update user profile
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

      dispatch(setAlert("user is loged in", "success"));
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };
};
