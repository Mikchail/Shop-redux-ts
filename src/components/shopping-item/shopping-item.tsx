import * as React from "react";
import {BasketItem} from "./../../types/types-products";
interface Props {
  item: BasketItem;
  handlerDeleteFromBasket: (id: string | number) => void;
}
const ShoppingItem: React.FC<Props> = (props: Props) => {
  const {item, handlerDeleteFromBasket} = props;
  const {article, description, total, id, price, pack,count} = item;
  console.log(item);
  return (
    <ul className="shopping__item">
      <li>{article}</li>
      <li>{description}</li>
      <li>{pack}</li>
      <li>
        <input type="number" className="quantity" defaultValue={count} disabled />
      </li>
      <li>{total.toFixed(1)}$</li>
      <li>
        <button
          onClick={() => handlerDeleteFromBasket(id)}
          type="button"
          className="remove-cart"
        ></button>
      </li>
    </ul>
  );
};

export default ShoppingItem;
