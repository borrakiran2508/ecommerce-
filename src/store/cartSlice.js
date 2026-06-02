import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    // Add to cart
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem =
        state.items.find(
          (x) =>
            x.id === item.id
        );

      // If already exists
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
        });
      }
    },

    // Remove item
    removeFromCart: (
      state,
      action
    ) => {
      state.items =
        state.items.filter(
          (item) =>
            item.id !== action.payload
        );
    },

    // Update quantity
    updateQuantity: (
      state,
      action
    ) => {
      const { id, quantity } =
        action.payload;

      const item =
        state.items.find(
          (x) => x.id === id
        );

      if (item) {
        item.quantity = quantity;

        // Remove if quantity 0
        if (item.quantity <= 0) {
          state.items =
            state.items.filter(
              (x) => x.id !== id
            );
        }
      }
    },

    // Clear cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;