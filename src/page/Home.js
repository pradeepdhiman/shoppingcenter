import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../store/productReducer/productThunk";

const Products = lazy(() => import("../components/products"));

let visited = false;

const Home = () => {
  const dispatch = useDispatch();
  const ProductData = useSelector((state) => state.product.products);

  useEffect(() => {
    if (!visited) {
      dispatch(GetProducts());
      visited = true;
    }
  }, [dispatch]);

  return (
    <>
      <div className="page">
        <div className="center">
          <div className="pageContainer">
            <div className="productContainer">
              <Suspense fallback={<div>Loading...</div>}>
                <Products products={ProductData} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
