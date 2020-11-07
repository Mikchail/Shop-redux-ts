import * as React from "react";
import CategoryItem from "./../category-item/category-item";
import {CategoryItemTypes} from "../../types/types-products";

interface Props {
  items: Array<CategoryItemTypes>;
}

const CategoryList: React.FC<Props> = (props: Props) => {
  const {items} = props;
  return (
    <div className="category">
      <div className="container-fluid">
        <div className="category__content">
          <ul className="category__header table-header">
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
              <span className="table-header__value">48 units</span>
            </li>
            <li>
              <span className="table-header__label">Group:</span>
              <select name="group">
                <option value="Screws with metric thread">
                  Screws with metric thread
                </option>
                <option value="Screws with metric thread-2">
                  Screws with metric thread-2
                </option>
                <option value="Screws with metric thread-3">
                  Screws with metric thread-3
                </option>
                <option value="Screws with metric thread-4">
                  Screws with metric thread-4
                </option>
              </select>
            </li>
          </ul>
          <ul className="category__list">
            {items &&
              items.map((item) => {
                return <CategoryItem key={item.id} item={item} />;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CategoryList;
