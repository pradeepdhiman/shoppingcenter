import { createSlice } from "@reduxjs/toolkit";

const intialCart = {
  items: [],
  totalItems: 0,
  total:0,
  change: false,
  showCart: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: intialCart,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
    AddToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((x) => x.id === newItem.id);
      state.totalItems++;
      state.total = state.total + newItem.price;
      state.change = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    IncreaseQty(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((x) => x.id === id);
      existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      existingItem.quantity++;
      state.totalItems++;
      state.total = state.total + existingItem.price;
      state.change = true;
    },
    DecreaseQty(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((x) => x.id === id);
      existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      existingItem.quantity--;
      state.totalItems--;
      state.change = true;
      state.total = state.total - existingItem.price;
      if (existingItem.quantity === 0) {
        const index = state.items.map((object) => object.id).indexOf(id);
        state.items.splice(index, 1);
      }
    },
  },
});

export const CartAction = CartSlice.actions;
export default CartSlice;
