import "./NavBar.css";
import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

function NavItems(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "white" }}
      >
        {props.name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link
            to={props.route + "/patient"}
            style={{ textDecoration: "none" }}
          >
            As Patient
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={props.route + "/doctor"} style={{ textDecoration: "none" }}>
            As Doctor
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavItems;
