import * as React from "react";

const ShoppingItem = () => {
  return (
    <ul className="shopping__item">
      <li>DIN 316</li>
      <li>WING SCREWS, M4X10, ZN</li>
      <li>100</li>
      <li>
        <input type="number" className="quantity" value="100" />
      </li>
      <li>1500$</li>
      <li>
        <button type="button" className="remove-cart"></button>
      </li>
    </ul>
  );
};

export default ShoppingItem;