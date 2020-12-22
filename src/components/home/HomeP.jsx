import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import myTheme from "../theme";

import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="body">
        <ThemeProvider theme={myTheme}>
          <form className="ss" onsubmit="event.preventDefault();" role="search">
            <input
              className="search"
              id="search"
              type="search"
              placeholder="Search..."
              autofocus
              required
            />
            <button className="searchbutt" type="submit">
              Search
            </button>
          </form>

          <div inline className="conbutt">
            <button className="row speccard mt-5">
              <div className="butt imgden" />
              <div>
                Dentist
              </div>
            </button>
            <button className="row speccard">
              <div className="butt img1" />
              <div variant="outline-info" block>
                Orthopaedist
              </div>
            </button>
            <button className="row speccard">
              <div className="butt img3" />
              <div variant="outline-info" block>
                Paediatrician
              </div>{" "}
            </button>

            <button className="row speccard">
              <div className="butt img4" />
              <div variant="outline-info" block>
                Dermatologist
              </div>{" "}
            </button>
            <button className="row speccard">
              <div className="butt img6" />
              <div variant="outline-info" block>
                Eye specialist
              </div>{" "}
            </button>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}
export default Home;
