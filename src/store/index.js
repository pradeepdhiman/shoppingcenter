import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartReducer/cartSlice";
import ProductSlice from "./productReducer/productSlice";
import UiSlice from "./UIReducer/uiSlice";

const store = configureStore({
  reducer: {
    product: ProductSlice.reducer,
    cart: CartSlice.reducer,
    ui: UiSlice.reducer,
  },
});

export default store;
