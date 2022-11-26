import { useDispatch } from "react-redux";
import { CartAction } from "../store/cartReducer/cartSlice";
import Button from "../UI/button";
import Input from "../UI/input";

const CartItem = (props) => {
  const { id, name, quantity, price, totalPrice } = props.data;
  const dispatch = useDispatch();
  function increaseQuantity() {
    dispatch(CartAction.IncreaseQty(id));
  }
  function decreaseQuantity() {
    dispatch(CartAction.DecreaseQty(id));
  }
  return (
    <div className="cartRow" key={id}>
      <div className="chItem">
        <p>{name}</p>
      </div>
      <div className="chItem">
        <p>{price.toFixed(2)}</p>
      </div>
      <div className="chItem qtyBox">
        <Button onPress={decreaseQuantity}>-</Button>
        <Input customeStyle="smallInput" value={quantity} isReadonly="true" />
        <Button onPress={ increaseQuantity}>+</Button>
      </div>
      <div className="chItem">
        <strong>{totalPrice.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default CartItem;
