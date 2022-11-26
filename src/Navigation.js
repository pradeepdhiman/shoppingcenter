import { Route } from "react-router-dom";
import CategoryListing from "./page/CategoryListing";
import Home from "./page/Home";

const Navigation = () => {
  return (
    <div>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/:categoryKey">
        <CategoryListing />
      </Route>
    </div>
  );
};

export default Navigation;
