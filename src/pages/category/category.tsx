import * as React from "react";
import CategoryList from "./../../components/category-list/category-list";
import {CategoryItemTypes} from "../../types/types-products";
interface Props {
  items: Array<CategoryItemTypes>;
  match: any;
}
const CategoryPage: React.FC<Props> = (props: Props) => {
  const {items ,match} = props;
  return (
    <div>
      <CategoryList match={match} items={items} />
    </div>
  );
};

export default CategoryPage;
