import * as React from "react";
import ProductsItem from "../products-item/products-item";

const ProductsList = () => {
  const items = [];
  return (
    <div className="product">
      <div className="container-fluid">
        <div className="product__content">
          <ul className="product__title-line table-header">
            <li>
              <span className="table-header__label">Show on page:</span>
              <select name="page">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
              </select>
            </li>
            <li>
              <span className="table-header__label">Show All:</span>
              <span className="table-header__value">274 units</span>
            </li>
            <li>
              <span className="table-header__label">Displaying (1-10)</span>
            </li>
          </ul>

          <ul className="product__header">
            <li>ARTICLE</li>
            <li>DESCRIPTION</li>
            <li>Ø,MM</li>
            <li>L,MM</li>
            <li>PACK</li>
            <li>QUANTITY</li>
            <li>PRICE</li>
          </ul>

          <div className="product__list">
            {items &&
              items.map((item) => {
                <ProductsItem />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
