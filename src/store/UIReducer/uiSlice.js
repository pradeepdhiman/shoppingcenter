import { createSlice } from "@reduxjs/toolkit";

const intialUiState = {
  cartIsVisible: false,
  notification: null,
};

const UiSlice = createSlice({
  name: "ui",
  initialState: intialUiState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    clearNotification(status) {
      status.notification = null;
    },
  },
});

export const uiActions = UiSlice.actions;

export default UiSlice;
