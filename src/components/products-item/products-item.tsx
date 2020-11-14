import * as React from "react";

import {addProductsToBasket} from "./../../actions/products";
import {connect} from "react-redux";
import { InnerItem } from './../../types/types-products';
interface Props {
  item: InnerItem;
  title: string
  addToBasket: (item,amount) => {};
}
const ProductsItem: React.FC<Props> = (props: Props) => {
  const refInput = React.useRef<HTMLInputElement>();
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
        <input ref={refInput} type="number" className="quantity" />
      </li>
      <li data-title="Price:">{price}$</li>
      <li>
        <button
          onClick={() => {
            const count = +refInput.current.value || 1
            console.log(count);
            addToBasket(item,count)
          }}
          type="button"
          className="add-cart"
        ></button>
      </li>
    </ul>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addToBasket: (item:InnerItem,amount:number) => {
    dispatch(addProductsToBasket(item,amount));
  }
});
export default connect(null, mapDispatchToProps)(ProductsItem);
