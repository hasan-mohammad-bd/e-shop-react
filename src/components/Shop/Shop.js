import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProduct] = useState([]);
//   console.log(products);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="flex justify-between">
      <div className="product grid grid-cols-3 gap-10">
          {
              products.map(product => <Products product={product}></Products>)
          }
      </div>
      <div className="cart">
        <h1>Cart section</h1>
      </div>
    </div>
  );
};

export default Shop;
