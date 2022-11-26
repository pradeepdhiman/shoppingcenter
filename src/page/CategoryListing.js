import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductItem from "../components/productItem";
import Sidebar from "../components/sidebar";

const CategoryListing = () => {
  const params = useParams();
  let key = params.categoryKey;
  const data = useSelector((state) => state.product.products);
  const selectedCategory = data.filter((x) => x.category === key);
  return (
    <div className="page">
      <div className="center">
        <div className="categoryPage">
          <div className="sidebarBox">
            <Sidebar />
          </div>
          <div className="mainContainer">
            <ProductItem listData={selectedCategory} heading={key} cat="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryListing;
