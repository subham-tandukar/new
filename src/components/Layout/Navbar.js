import React, { useContext, useEffect, useState } from "react";
import $ from "jquery";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth-context";
import LogOut from "./LogOut";
import "../../css/navbar.css";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const Navbar = ({ userDetails, handleMenuChange }) => {
  const { logout } = useContext(AuthContext);
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const logoutHandler = (e) => {
    localStorage.clear();
    sessionStorage.clear();
    logout();
    navigate("/");
  };

  const handleLogout = () => {
    setAnchorEl(null);
    $(".log-out-bg").fadeIn(300);
    $(".log-out").slideDown(500);
  };

  return (
    <>
      <div className="container-fluid g-0">
        <div className="uk-flex">
          <div className="uk-width-1-1 uk-remove-padding">
            <div className="header_iner uk-flex uk-flex-between uk-flex-middle">
              <div className="sidebar_icon pointer" onClick={handleMenuChange}>
                <GiHamburgerMenu size="1.2rem" color="var(--primary)" />
              </div>

              <div>
                <div className="profile_info pointer" onClick={handleClick}>
                  {userDetails.email}
                  <FaChevronDown className="uk-margin-small-left"/>
                </div>

                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Typography
                    className="pointer"
                    sx={{ p: 2 }}
                    onClick={handleLogout}
                  >
                    Log out
                  </Typography>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LogOut logoutHandler={logoutHandler} />
    </>
  );
};

export default Navbar;
