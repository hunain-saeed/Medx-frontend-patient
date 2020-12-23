import "./NavBar.css";
import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function NavItems(props) {
  return (
    <div>
      <Link to={props.route} style={{ textDecoration: "none" }}>
        <Button className="white">{props.name}</Button>
      </Link>
    </div>
  );
}

export default NavItems;
