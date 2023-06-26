import React from "react";
import $ from "jquery";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const LogOut = ({ logoutHandler }) => {
  const handleClose = () => {
    $(".log-out-bg").fadeOut(300);
    $(".log-out").slideUp(500);
  };
  return (
    <>
      <section className="popup-bg log-out-bg">
        <div className="popup log-out" style={{ width: "30%" }}>
          <div className="popup-head">
            <h4>Log Out</h4>

            <div className="popup-close hamburger-menu">
              <button onClick={handleClose} className="uk-button bg-btn">
                <AiOutlineClose uk-tooltip="Close" size="1.3rem" color="#fff" />
              </button>
            </div>
          </div>

          <div className="popup-body">
            <p style={{ color: "#000" }}>Are you sure you want to logout?</p>
          </div>
          <div className="popup-footer buttons">
            <button
              className="uk-button bg-btn uk-margin-right"
              onClick={logoutHandler}
            >
              <Link>Yes</Link>
            </button>
            <button className="uk-button transparent-btn" onClick={handleClose}>
              <Link>No</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogOut;
