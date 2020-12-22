import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

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
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }}>
          <MenuItem onClick={(handleClose, props.logout)}>Logout</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default NavItems;
