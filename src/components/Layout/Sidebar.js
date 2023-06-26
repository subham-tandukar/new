import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import MetisMenu from "@metismenu/react";
import "../../../node_modules/metismenujs/dist/metismenujs.css";
import "../../css/sidebar.css";
import $ from "jquery";
import { GrFormClose } from "react-icons/gr";
import { FaRegStickyNote, FaCodeBranch } from "react-icons/fa";
import { FiUsers, FiUser } from "react-icons/fi";
import { AiOutlineDashboard, AiOutlineCalendar } from "react-icons/ai";
import { GiStairsGoal } from "react-icons/gi";
import { RiAdminLine } from "react-icons/ri";
import { BsListCheck } from "react-icons/bs";
import logo from "../../images/logo.png";

const Sidebar = ({ handleMenuChange, smallScreen, userDetails }) => {
  console.log(userDetails);
  console.log("role", userDetails.role);
  return (
    <>
      <div className="logo d-flex justify-content-between uk-position-relative">
        <a className="large_logo uk-flex uk-flex-middle">
          <img src={logo} alt="" />
          <h5>
            Basobas Happy Homes <br /> Pvt. Ltd
          </h5>
        </a>
        <a className="small_logo">
          <img src={logo} alt="" />
        </a>
        <div
          className="sidebar_close_icon uk-hidden@m"
          onClick={handleMenuChange}
        >
          <GrFormClose />
        </div>
      </div>
      <div id="sidebar_menu">
        {userDetails.role === "admin" && (
          <MetisMenu className="uk-padding-remove">
            <li className="">
              <NavLink
                className=""
                to="/admin-dashboard"
                aria-expanded="false"
                onClick={smallScreen && handleMenuChange}
              >
                <div className="nav_icon_small">
                  <AiOutlineDashboard size="1.2rem" color="var(--secondary)" />
                </div>
                <div className="nav_title">
                  <span>Dashboard </span>
                </div>
              </NavLink>
            </li>
            {/* <li className="">
            <Link className="has-arrow" aria-expanded="false">
              <div className="nav_icon_small">
                <BiMoneyWithdraw size="1.2rem" color="var(--secondary)" />
              </div>
              <div className="nav_title">
                <span>Fine and Penalties</span>
              </div>
            </Link>
            <ul>
              <li>
                <NavLink to="/" onClick={smallScreen && handleMenuChange}>
                  SubHead1
                </NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={smallScreen && handleMenuChange}>
                  SubHead2
                </NavLink>
              </li>
            </ul>
          </li> */}
            <li className="">
              <NavLink
                to="/admin-user"
                onClick={smallScreen && handleMenuChange}
              >
                <div className="nav_icon_small">
                  <RiAdminLine size="1.2rem" color="var(--secondary)" />
                </div>
                <div className="nav_title">
                  <span>Admin User</span>
                </div>
              </NavLink>
            </li>

            <li className="">
              <NavLink
                to="/admin-tenant"
                onClick={smallScreen && handleMenuChange}
              >
                <div className="nav_icon_small">
                  <FiUsers size="1.2rem" color="var(--secondary)" />
                </div>
                <div className="nav_title">
                  <span>Tenants</span>
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/admin-owner"
                onClick={smallScreen && handleMenuChange}
              >
                <div className="nav_icon_small">
                  <FiUser size="1.2rem" color="var(--secondary)" />
                </div>
                <div className="nav_title">
                  <span>Owner</span>
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/" onClick={smallScreen && handleMenuChange}>
                <div className="nav_icon_small">
                  <BsListCheck size="1.2rem" color="var(--secondary)" />
                </div>
                <div className="nav_title">
                  <span>Facilities</span>
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/" onClick={smallScreen && handleMenuChange}>
                <div className="nav_icon_small">
                  <FaRegStickyNote size="1.2rem" color="var(--secondary)" />
                </div>
                <div className="nav_title">
                  <span>Inquiry Portal</span>
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/" onClick={smallScreen && handleMenuChange}>
                <div className="nav_icon_small">
                  <GiStairsGoal size="1.2rem" color="var(--secondary)" />
                </div>
                <div className="nav_title">
                  <span>Career</span>
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/" onClick={smallScreen && handleMenuChange}>
                <div className="nav_icon_small">
                  <FaCodeBranch size="1.2rem" color="var(--secondary)" />
                </div>
                <div className="nav_title">
                  <span>Branch</span>
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/" onClick={smallScreen && handleMenuChange}>
                <div className="nav_icon_small">
                  <AiOutlineCalendar size="1.2rem" color="var(--secondary)" />
                </div>
                <div className="nav_title">
                  <span>Fiscal</span>
                </div>
              </NavLink>
            </li>
          </MetisMenu>
        )}
      </div>
    </>
  );
};

export default Sidebar;
