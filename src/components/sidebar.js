// import Button from "../UI/button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ProductAction } from "../store/productReducer/productSlice";
import Input from "../UI/input";

const Sidebar = () => {
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const priceHandler = (e) => {
    const value = e.target.value;
    setPrice(value);
    if (value) {
      dispatch(ProductAction.SearchByPrice(value));
    } else {
      dispatch(ProductAction.ClearFilter());
    }
  };

  return (
    <div className="pageSidebar">
      <h3>Filter By</h3>
      {/* <div className="cat">
        <h4>Gender</h4>
        <ul>
          <li>
            <Button>Male</Button>
          </li>
          <li>
            <Button>Female</Button>
          </li>
        </ul>
      </div> */}
      <div className="cat">
        <h4>Price</h4>
        <div className="rangeSelector">
          <label>
            Price Range $<span>0</span>
          </label>
          <Input
            type="text"
            value={price}
            onChange={priceHandler}
            placeholder="Enter Price Range"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
