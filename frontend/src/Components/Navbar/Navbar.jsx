import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo2.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContest";
import dropdown_icon from "../Assets/dropdown.png";
export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItem } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="logo" />
        <p>SHOPPING SITE</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={dropdown_icon}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="womens">
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/login");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  );
}