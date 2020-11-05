import axios from "axios";

import { setAlert } from "./alert";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
import { LoginPatient } from "../apis/api";

// //Register User
// export const register = (user) => {
//   return (dispatch) => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const body = JSON.stringify(user);
//     try {
//         const res = await axios.post('')
//     } catch (error) {

//     }
//   };
// };

// Login User
export const login = (email, password) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });
    try {
      const res = await axios.post(LoginPatient, body, config);

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
