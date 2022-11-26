import { useSelector } from "react-redux";

const SearchResult = () => {
  const products = useSelector((state) => state.product);
};

export default SearchResult;
