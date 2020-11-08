import * as React from "react";
import {InnerItem} from "../../types/types-products";
interface Props {
  item: InnerItem;
}
const ProductsItem: React.FC<Props> = (props: Props) => {
  const {article, description, src, mm, lmm, pack, price, id} = props.item;
  return (
    <ul className="product__item">
      <li>{article}</li>
      <li>{description}</li>
      <li data-title="Ø,mm:">{mm}</li>
      <li data-title="L,mm:">{lmm}</li>
      <li data-title="Pack:">{pack}</li>
      <li data-title="Quantity:">
        <input type="number" className="quantity" />
      </li>
      <li data-title="Price:">{price}$</li>
      <li>
        <button type="button" className="add-cart"></button>
      </li>
    </ul>
  );
};

export default ProductsItem;
