import React, {
  useState,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { loginUser } from "../store/authSlice";

import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loading, error } =
    useSelector((state) => state.auth);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result =
      await dispatch(
        loginUser(formData)
      );

    if (
      result.meta.requestStatus ===
      "fulfilled"
    ) {
      navigate("/dashboard");
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Login</h2>
        {error && (
          <p style={errorStyle}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div style={inputGroup}>
            <label style={label}>
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              style={input}
              required
            />
          </div>

          <div style={inputGroup}>
            <label style={label}>
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              style={input}
              required
            />
          </div>

          <button style={button}>
            {loading
              ? "Loading..."
              : "Login"}
          </button>
        </form>

        <p style={footerText}>
          Don't have an account?{" "}
          <Link
            to="/register"
            style={registerLink}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    "linear-gradient(to right, #4f46e5, #7c3aed)",
  padding: "20px",
};

const card = {
  background: "#fff",
  width: "100%",
  maxWidth: "400px",
  padding: "40px",
  borderRadius: "15px",
  boxShadow:
    "0 8px 20px rgba(0,0,0,0.2)",
};

const title = {
  textAlign: "center",
  marginBottom: "10px",
  color: "#111827",
};

const subtitle = {
  textAlign: "center",
  marginBottom: "30px",
  color: "#6b7280",
};

const inputGroup = {
  marginBottom: "20px",
};

const label = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "600",
  color: "#374151",
};

const input = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  outline: "none",
  fontSize: "16px",
  boxSizing: "border-box",
};

const button = {
  width: "100%",
  padding: "12px",
  border: "none",
  borderRadius: "8px",
  background: "#4f46e5",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "10px",
};

const errorStyle = {
  background: "#fee2e2",
  color: "#dc2626",
  padding: "10px",
  borderRadius: "6px",
  marginBottom: "15px",
  textAlign: "center",
};

const footerText = {
  textAlign: "center",
  marginTop: "20px",
  color: "#6b7280",
};

const registerLink = {
  color: "#4f46e5",
  textDecoration: "none",
  fontWeight: "600",
};

export default Login;