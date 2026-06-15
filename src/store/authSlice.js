import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import axios from "axios";

const userFromStorage =
  JSON.parse(
    localStorage.getItem("user")
  );

const initialState = {
  user: userFromStorage || null,
  loading: false,
  error: null,
};

// REGISTER
export const registerUser =
  createAsyncThunk(
    "auth/register",
    async (
      userData,
      thunkAPI
    ) => {
      try {
        const { data } =
          await axios.post(
            "https://ecommerce-backend-api-62v2.onrender.com/api/auth/register",
            userData
          );

        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response.data.message
        );
      }
    }
  );

// LOGIN
export const loginUser =
  createAsyncThunk(
    "auth/login",
    async (
      userData,
      thunkAPI
    ) => {
      try {
        const { data } =
          await axios.post(
            "https://ecommerce-backend-api-62v2.onrender.com/api/auth/login",
            userData
          );

        localStorage.setItem(
          "user",
          JSON.stringify(data)
        );

        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response.data.message
        );
      }
    }
  );

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    logout: (state) => {
      localStorage.removeItem(
        "user"
      );

      state.user = null;
    },
  },

  extraReducers: (
    builder
  ) => {
    builder

      .addCase(
        registerUser.pending,
        (state) => {
          state.loading = true;
        }
      )

      .addCase(
        registerUser.fulfilled,
        (state) => {
          state.loading = false;
        }
      )

      .addCase(
        registerUser.rejected,
        (
          state,
          action
        ) => {
          state.loading = false;
          state.error =
            action.payload;
        }
      )

      .addCase(
        loginUser.pending,
        (state) => {
          state.loading = true;
        }
      )

      .addCase(
        loginUser.fulfilled,
        (
          state,
          action
        ) => {
          state.loading = false;
          state.user =
            action.payload;
        }
      )

      .addCase(
        loginUser.rejected,
        (
          state,
          action
        ) => {
          state.loading = false;
          state.error =
            action.payload;
        }
      );
  },
});

export const { logout } =
  authSlice.actions;

export default authSlice.reducer;