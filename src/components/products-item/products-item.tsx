import * as React from "react";

const ProductsItem = () => {
  return (
    <ul className="product__item">
      <li>DIN 316</li>
      <li>WING SCREWS, M5X12, ZN</li>
      <li data-title="Ø,mm:">5</li>
      <li data-title="L,mm:">12</li>
      <li data-title="Pack:">100</li>
      <li data-title="Quantity:">
        <input type="number" className="quantity" />
      </li>
      <li data-title="Price:">1500$</li>
      <li>
        <button type="button" className="add-cart"></button>
      </li>
    </ul>
  );
};

export default ProductsItem;
