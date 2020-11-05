import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavItem(props) {
  return (
    <div>
      <NavDropdown title={props.name} id="basic-nav-dropdown">
        <NavDropdown.Item>
          <Link
            to={props.route + "/patient"}
            style={{ textDecoration: "none" }}
          >
            As Patient
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to={props.route + "/doctor"} style={{ textDecoration: "none" }}>
            As Doctor
          </Link>
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default NavItem;
