import { createSlice } from "@reduxjs/toolkit";

const intialProduct = {
  products: [],
  tempProduct: [],
  filterby: "",
  searchText: ""
};

const ProductSlice = createSlice({
  name: "product",
  initialState: intialProduct,
  reducers: {
    AddProducts(state, action) {
      state.products = [...action.payload];
      state.tempProduct = [...action.payload];
    },
    SearchProduct(state, action) {
      const searchKey = action.payload.searchText;
      if (searchKey) {
        const myProducts = state.tempProduct;
        state.searchText = searchKey;
        var filteredProducts = myProducts.filter((x) => {
          return x.title.toLowerCase().includes(searchKey.toLowerCase());
        });
        state.products = [...filteredProducts];
      }
    },
    ClearFilter(state) {
      state.products = [...state.tempProduct];
      state.searchText = "";
    },
    SearchByPrice(state, action) {
      const searchPrice = action.payload;
      if (searchPrice !== 0) {
        const myProducts = state.tempProduct;
        state.searchText = searchPrice;
        var filteredProducts = myProducts.filter((x) => {
          return +x.price <= +searchPrice;
        });
        state.products = [...filteredProducts];
      }
    }
  },
});

export const ProductAction = ProductSlice.actions;
export default ProductSlice;
