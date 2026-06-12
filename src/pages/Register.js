import {
  useState,
} from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  registerUser,
} from "../store/authSlice";

import {
  useNavigate,
} from "react-router-dom";

function Register() {
  const dispatch =
    useDispatch();

  const navigate =
    useNavigate();

  const { loading, error } =
    useSelector(
      (state) => state.auth
    );

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      role: "user",
    });

  const handleChange = (
    e
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    const result =
      await dispatch(
        registerUser(
          formData
        )
      );

    if (
      registerUser.fulfilled.match(
        result
      )
    ) {
      navigate("/login");
    }
  };

  return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f7fb",
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: "450px",
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow:
          "0 4px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Create Account
      </h2>

      {error && (
        <p
          style={{
            color: "red",
            textAlign: "center",
            marginBottom: "15px",
          }}
        >
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={{
            padding: "12px",
            border:
              "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={{
            padding: "12px",
            border:
              "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={{
            padding: "12px",
            border:
              "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
          }}
        />

        <select
          name="role"
          onChange={handleChange}
          style={{
            padding: "12px",
            border:
              "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          <option value="user">
            User
          </option>

          <option value="seller">
            Seller
          </option>

          <option value="admin">
            Admin
          </option>
        </select>

        <button
          type="submit"
          style={{
            padding: "12px",
            background:
              "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          {loading
            ? "Loading..."
            : "Register"}
        </button>
      </form>
    </div>
  </div>
);
}

export default Register;