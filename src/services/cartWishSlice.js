import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  wishlist: [],
};

const cartWishSlice = createSlice({
  name: "cartWish",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.cart.push(action.payload);
    },

    increaseCartQuantity(state, action) {
      const cartItem = state.cart.find((el) => action.payload === el.id);

      cartItem.quantity++;
      cartItem.totalPrice = cartItem.price * cartItem.quantity;
      cartItem.totalDiscountPrice = cartItem.discountPrice * cartItem.quantity;
    },

    addItemToWishlist(state, action) {
      state.wishlist.push(action.payload);
    },

    removeItemFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter((el) => action.payload !== el.id);
    },
  },
});

export const {
  addItemToCart,
  increaseCartQuantity,
  addItemToWishlist,
  removeItemFromWishlist,
} = cartWishSlice.actions;

export default cartWishSlice.reducer;

// Cart
export const getCart = (state) => state.cartWish.cart;
export const getQuantity = (state) =>
  state.cartWish.cart.reduce((sum, item) => sum + item.quantity, 0);

// Wishlist
export const getWishlist = (state) => state.cartWish.wishlist;
export const getWishlistQuantity = (state) => state.cartWish.wishlist.length;
