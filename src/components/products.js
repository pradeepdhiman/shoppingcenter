import ProductItem from "./productItem";

const Products = ({ products }) => {
  let data = {};

  // products.map((item) => {
  //   if (!data[item.category]) data[item.category] = [];
  //   data[item.category].push(item);
  // });

  products.forEach((item) => {
    if (!data[item.category]) data[item.category] = [];
    data[item.category].push(item);
  });

  const key = Object.keys(data);

  return (
    <div className="productsBox">
      {key.map((item) => (
        <ProductItem key={item} heading={item} listData={data[item]} />
      ))}
    </div>
  );
};

export default Products;
