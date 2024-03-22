import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo2.png";
import navProfile from "../../assets/nav-profile.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="logo" />
        <p>SHOPPING SITE</p>
      </div>
      <img src={navProfile} alt="" className="nav-profile" />
    </div>
  );
};

export default Navbar;
