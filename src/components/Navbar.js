import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { ThemeContext } from "../context/ThemeContext";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { logout } from "../store/authSlice";

const Navbar = () => {
  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const dispatch = useDispatch();

  // USER STATE
  const { user } = useSelector(
    (state) => state.auth
  );

  // CART STATE
  const  cartItems  = useSelector(
    (state) => state.cart.items
  ) || [];

  // CART COUNT
  const totalQty = cartItems.reduce(
    (acc, item) =>
      acc + item.quantity,
    0
  );

  return (
    <>
      <nav
        style={{
          backgroundColor: darkMode
            ? "#1e1e1e"
            : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#4f46e5",
          }}
        >
          ShopEasy
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Link
            style={linkStyle(darkMode)}
            to="/"
          >
            Home
          </Link>

          <Link
            style={linkStyle(darkMode)}
            to="/products"
          >
            Products
          </Link>

          <Link
            style={linkStyle(darkMode)}
            to="/seller"
          >
            Seller
          </Link>

          <Link
            style={linkStyle(darkMode)}
            to="/admin"
          >
            Admin
          </Link>

          {/* CART WITH COUNT */}
          <Link
            style={linkStyle(darkMode)}
            to="/cart"
          >
            🛒 Cart ({totalQty})
          </Link>

          <button
  onClick={toggleTheme}
  style={{
    width: "60px",
    height: "30px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: darkMode
      ? "#4f46e5"
      : "#d1d5db",
    position: "relative",
    cursor: "pointer",
    transition: "0.3s",
  }}
>
  <div
    style={{
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      position: "absolute",
      top: "3px",
      left: darkMode
        ? "32px"
        : "4px",
      transition: "0.3s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
    }}
  >
    {darkMode ? "🌙" : "☀️"}
  </div>
</button>

          {/* LOGIN / REGISTER / LOGOUT */}
          {!user ? (
            <>
              <Link
                style={loginBtn}
                to="/login"
              >
                Login
              </Link>

              <Link
                style={loginBtn}
                to="/register"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={() =>
                dispatch(logout())
              }
              style={loginBtn}
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: darkMode
              ? "#1e1e1e"
              : "#ffffff",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            gap: "15px",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Link
            style={linkStyle(darkMode)}
            to="/"
          >
            Home
          </Link>

          <Link
            style={linkStyle(darkMode)}
            to="/products"
          >
            Products
          </Link>

          <Link
            style={linkStyle(darkMode)}
            to="/seller"
          >
            Seller
          </Link>

          <Link
            style={linkStyle(darkMode)}
            to="/admin"
          >
            Admin
          </Link>

          {/* MOBILE CART */}
          <Link
            style={linkStyle(darkMode)}
            to="/cart"
          >
            🛒 Cart ({totalQty})
          </Link>

         <button
  onClick={toggleTheme}
  style={{
    width: "60px",
    height: "30px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: darkMode
      ? "#4f46e5"
      : "#d1d5db",
    position: "relative",
    cursor: "pointer",
    transition: "0.3s",
  }}
>
  <div
    style={{
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      position: "absolute",
      top: "3px",
      left: darkMode
        ? "32px"
        : "4px",
      transition: "0.3s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
    }}
  >
    {darkMode ? "🌙" : "☀️"}
  </div>
</button>

          {/* MOBILE LOGIN / LOGOUT */}
          {!user ? (
            <>
              <Link
                style={loginBtn}
                to="/login"
              >
                Login
              </Link>

              <Link
                style={loginBtn}
                to="/register"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={() =>
                dispatch(logout())
              }
              style={loginBtn}
            >
              Logout
            </button>
          )}
        </div>
      )}

      {/* Responsive CSS */}
      <style>
        {`
          .desktop-menu {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 28px;
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .desktop-menu {
              display: none;
            }

            .menu-btn {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
};

const linkStyle = (darkMode) => ({
  textDecoration: "none",
  color: darkMode ? "#ffffff" : "#000000",
  fontSize: "16px",
  fontWeight: "500",
});

const themeBtn = {
  padding: "8px 14px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  backgroundColor: "#4f46e5",
  color: "#fff",
  fontWeight: "bold",
};

const loginBtn = {
  textDecoration: "none",
  backgroundColor: "#4f46e5",
  color: "#fff",
  padding: "8px 16px",
  borderRadius: "6px",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
};

export default Navbar;