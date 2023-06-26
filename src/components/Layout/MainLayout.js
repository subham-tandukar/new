import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NavbarContext from "../context/navbar-context";
import Toast from "../Toast";
import UsewindowDimension from "../hooks/UsewindowDimension";
import "../../css/mainContent.css";

const MainLayout = (props) => {
  const { userDetails, setUserDetails } = useContext(NavbarContext);

  const [sideMenu, setSideMenu] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const cur_user = localStorage.getItem("userInfo");

    cur_user.length && setUserDetails(JSON.parse(cur_user));
  }, []);

  const { width } = UsewindowDimension();

  const handleMenuChange = () => {
    setSideMenu(!sideMenu);
  };

  useEffect(() => {
    if (width < 960) {
      setSideMenu(sideMenu);
      setSmallScreen(true);
    } else {
      setSideMenu(!sideMenu);
      setSmallScreen(false);
    }
  }, [width]);

  return (
    <>
      <Toast />
      {!smallScreen ? (
        <>
          <nav
            className={`sidebar active_sidebar ${
              sideMenu ? "mini_sidebar" : ""
            }`}
          >
            <Sidebar
              userDetails={userDetails}
              handleMenuChange={handleMenuChange}
              sideMenu={sideMenu}
             
            />
          </nav>

          <section
            className={`main_content ${sideMenu ? "full_main_content" : ""}`}
          >
            <Navbar
              userDetails={userDetails}
              handleMenuChange={handleMenuChange}
            />

            <div className="main_content_iner">{props.children}</div>
          </section>
        </>
      ) : (
        <>
          <nav className={`sidebar ${sideMenu ? "active_sidebar" : ""}`}>
            <Sidebar
              userDetails={userDetails}
              handleMenuChange={handleMenuChange}
              smallScreen={smallScreen}
            />
          </nav>

          <section className="main_content">
            <Navbar
              userDetails={userDetails}
              handleMenuChange={handleMenuChange}
            />

            <div className="main_content_iner">{props.children}</div>
          </section>
        </>
      )}
    </>
  );
};

export default MainLayout;
