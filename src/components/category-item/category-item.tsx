import * as React from "react";
import {Link} from "react-router-dom";
import {routers} from "../../const/const";
import {CategoryItemTypes} from "../../types/types-products";

export interface Props {
  item: CategoryItemTypes;
}

const CategoryItem: React.FC<Props> = (props: Props) => {
  const {src, article, title, link, id} = props.item;

  return (
    <li className="category__item">
      <Link
        to={`${routers.FASTENERS}${link ? "/" + link : "/"}`}
        className="category__link"
      >
        <span className="category__thumb">
          {src && <img src="./img/content/category/category-1.jpg" alt="alt" />}
        </span>
        <span className="category__id">{id}</span>
        <span className="category__title">{title}</span>
      </Link>
    </li>
  );
};

export default CategoryItem;
