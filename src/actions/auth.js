import axios from "axios";
// Action creators
import { setAlert } from "./alert";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  PAT_PROFILE,
  SIGN_OUT,
} from "./types";

// All backend apis
import { Register, Login, PatProfile, UpdateProfileApi } from "../apis/api";

// Global variable
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Register for Doctor and Patient both
// in progress
export const register = (user, name) => {
  return async (dispatch) => {
    const body = JSON.stringify(user);
    try {
      localStorage.setItem("role", name);
      const res = await axios.post(Register + name, body, config);

      dispatch({ type: REGISTER_SUCCESS, payload: res.data });

      // TODO remove success alert msg and update user profile
      dispatch(setAlert("User registerd!", "success"));
    } catch (err) {
      console.log(err);

      if (err.response) {
        const errors = err.response.data
          ? err.response.data.errors
          : err.response;
        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }
      }

      dispatch({ type: REGISTER_FAIL });
    }
  };
};

// Login for Patient and Doctor both
// completed
export const login = ({ email, password }, name) => {
  return async (dispatch) => {
    const body = JSON.stringify({ email, password });
    try {
      localStorage.setItem("role", name);
      const res = await axios.post(Login + name, body, config);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

      // TODO remove success alert msg and update user profile
      dispatch(setAlert("user is loged in", "success"));
    } catch (err) {
      if (err.response) {
        const errors = err.response.data
          ? err.response.data.errors
          : err.response;
        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }
      }

      dispatch({ type: LOGIN_FAIL });
    }
  };
};

// Load User
export const loadPat = () => {
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
        const role = await localStorage.getItem("role");
        if (role === "patient") {
          const res = await axios.get(PatProfile, config2);

          dispatch({ type: PAT_PROFILE, payload: res.data });
        }
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

// logout User
export const logoutPat = () => {
  return async (dispatch) => {
    dispatch({ type: SIGN_OUT });
    dispatch(setAlert("You are logged out!", "warning"));
  };
};

// Update profile
export const updatePat = (user) => {
  return async (dispatch) => {
    if (localStorage.getItem("token") !== null) {
      const token = await localStorage.getItem("token");
      const config2 = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      const body = JSON.stringify(user);
      try {
        await axios.post(UpdateProfileApi, body, config2);
        loadPat();
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
