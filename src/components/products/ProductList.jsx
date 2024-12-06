import React, { useEffect } from "react";
import scss from "./ProductList.module.scss";
import { useProduct } from "../../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { readProduct, product } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className={scss.list}>
      <div className="container">
        <div className={scss.content}>
          {product ? (
            product.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
