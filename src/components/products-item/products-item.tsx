import * as React from "react";

import {InnerItem} from "../../types/types-products";
import {addProductsToBasket} from "./../../actions/products";
import {connect} from "react-redux";
interface Props {
  item: InnerItem;
  title: string
  addToBasket: (item) => {};
}
const ProductsItem: React.FC<Props> = (props: Props) => {
  const {addToBasket, item} = props;
  const {article, description, src, mm, lmm, pack, price, id} = item;
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
        <button
          onClick={() => addToBasket(item)}
          type="button"
          className="add-cart"
        ></button>
      </li>
    </ul>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addToBasket: (item) => {
    dispatch(addProductsToBasket(item));
  }
});
export default connect(null, mapDispatchToProps)(ProductsItem);
