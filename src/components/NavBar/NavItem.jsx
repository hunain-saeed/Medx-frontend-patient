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
        className="white"
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
        <Link to={props.route + "/patient"} style={{ textDecoration: "none" }}>
          <MenuItem onClick={handleClose}>As Patient</MenuItem>
        </Link>

        <Link to={props.route + "/doctor"} style={{ textDecoration: "none" }}>
          <MenuItem onClick={handleClose}>As Doctor</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default NavItems;
