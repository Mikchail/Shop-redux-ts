import * as React from "react";
import { BasketItem } from './../../types/types-products';
interface Props {
  item: BasketItem
}
const ShoppingItem: React.FC<Props> = (props: Props) => {
  const {item} = props;
  const {article,description,total,id,price,pack} = item
  console.log(item)
  return (
    <ul className="shopping__item">
      <li>{article}</li>
      <li>{description}</li>
      <li>{pack}</li>
      <li>
        <input type="number" className="quantity" value="100" />
      </li>
      <li>{total}$</li>
      <li>
        <button type="button" className="remove-cart"></button>
      </li>
    </ul>
  );
};

export default ShoppingItem;