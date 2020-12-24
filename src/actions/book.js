// TODO get current log in user profile
import axios from "axios";
// Action creators
import { setAlert } from "./alert";
import { BOOK_APP } from "./types";

// All backend apis
import { BookApi } from "../apis/api";

// Patient appointment list
export const bookapp = (app, id) => {
  return async (dispatch) => {
    if (localStorage.getItem("token") !== null) {
      const token = await localStorage.getItem("token");
      const config2 = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      const body = JSON.stringify(app);
      try {
        const res = await axios.post(BookApi + id, body, config2);

        dispatch({ type: BOOK_APP, payload: res.data });
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
