
import { useSelector } from "react-redux";
import Button from "../UI/button";
import CartItem from "./cartItem";

const CartListing = () => {
  const cart = useSelector((state) => state.cart);

 
  return (
    <div className="cartBox">
      <div className="cartHeader">
        <div className="chItem">
          <h4>Name</h4>
        </div>
        <div className="chItem">
          <h4>Price</h4>
        </div>
        <div className="chItem">
          <h4>Quantity</h4>
        </div>
        <div className="chItem">
          <h4>Total Price</h4>
        </div>
      </div>
      {cart.items.map((item) => (
        <CartItem key={item.id} data={item} />
      ))}
      <div className="cartTotalBox">
        <div className="totalRow">
            <h4>Total : </h4>
            <h4>{cart.total.toFixed(2)}</h4>
        </div>
        <div className="cartCheckOut">
            <Button btnStyle="checkOutBtn">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartListing;
