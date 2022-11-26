import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useState } from "react";
import Input from "../UI/input";
import Button from "../UI/button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductAction } from "../store/productReducer/productSlice";
import Model from "./model";
import CartListing from "./cartListing";
import { CartAction } from "../store/cartReducer/cartSlice";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const newKey = e.target.value;
    if (newKey.length !== 0) {
      setSearchKey(newKey);
    } else {
      setSearchKey("");
      dispatch(ProductAction.ClearFilter());
    }
  };

  const searchHandler = () => {
    dispatch(ProductAction.SearchProduct({ searchText: searchKey }));
  };

  const cartShowHandler = () => {
    dispatch(CartAction.toggle());
  };

  return (
    <>
      {cart.showCart && (
        <Model closingAction={cartShowHandler}>
          {cart.totalItems > 0 ? <CartListing /> : <h3 className="cartMsg">No Items in the cart</h3>}
        </Model>
      )}
      <header>
        <div className="center">
          <div className="headerContainer">
            <div className="logo">
              <Link to="/">
                <h2>My Shop</h2>
              </Link>
            </div>
            <div className="search">
              <Input
                customeStyle=""
                valicationStyle=""
                type="search"
                value={searchKey}
                placeholder="Search"
                onChange={changeHandler}
              />
              <Button onPress={searchHandler}>Search</Button>
            </div>
            <div className="headerControl">
              <div className="cart" onClick={cartShowHandler}>
                <AiOutlineShoppingCart fontSize={25} fill="black" />
                <span>{cart.totalItems}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
