import { uiActions } from "../UIReducer/uiSlice";
import { ProductAction } from "./productSlice";

export const GetProducts = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showLoading({
        status: "pending",
        title: "Fetching...",
        message: "Fetching Products data!",
      })
    );

    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Could not fetch products !");
      }
      const data = await response.json();

      return data;
    };

    try {
      const productData = await fetchProduct();
      dispatch(ProductAction.AddProducts(productData));
      dispatch(
        uiActions.showLoading({
          status: "success",
          title: "Success!",
          message: "Successfully Fetched!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showLoading({
          status: "error",
          title: "Error!",
          message: "Fetching products data failed!",
        })
      );
    }
  };
};
