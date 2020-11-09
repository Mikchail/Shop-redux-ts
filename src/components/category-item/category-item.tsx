import * as React from "react";
import {Link} from "react-router-dom";
import {routers} from "../../const/const";
import {CategoryItemTypes} from "../../types/types-products";

export interface Props {
  item: CategoryItemTypes;
  match: any
}

const CategoryItem: React.FC<Props> = (props: Props) => {
  const {src, article, title, link, id,items} = props.item;
  const {match} = props;
  
  return (
    <li className="category__item">
      <Link
        to={`${match.url}${link ? "/" + link : ""}`}
        className="category__link"
      >
        <span className="category__thumb">
          {src && <img src="./img/content/category/category-1.jpg" alt="alt" />}
        </span>
        <span className="category__id">{id}</span>
        <span className="category__title">{title}</span>
        <span className="counter_icon category__id_big">{items.length} items</span>
      </Link>
    </li>
  );
};

export default CategoryItem;
