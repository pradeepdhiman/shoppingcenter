import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CartAction } from "../store/cartReducer/cartSlice";
import Button from "../UI/button";

const ProductItem = ({ heading, listData, cat }) => {
  const dispatch = useDispatch();

  const addButtonHandler = (id) => {
    const selectedItem = listData.find((x) => x.id === id);
    dispatch(CartAction.AddToCart(selectedItem));
  };

  return (
    <div className="productRowHolder">
      <div className="productHeadingRow">
        <h2>{heading.toUpperCase()}</h2>
        {!cat && (
          <Link className="btnSmall" to={heading}>
            View
          </Link>
        )}
      </div>
      <div className="prductStrip">
        {listData.map((item) => (
          <div key={item.id} className="product">
            <div className="productImage">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="productDesc">
              <div className="introRow">
                <p className="productName">{item.title}</p>
              </div>
              <div className="productControl">
                <div className="productPrice">
                  <p>$ {item.price}</p>
                </div>
                <div className="productBtn">
                  <Button onPress={(event) => addButtonHandler(item.id)}>
                    Buy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;
