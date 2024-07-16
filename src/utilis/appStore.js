import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utilis/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
