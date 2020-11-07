import * as React from "react";
import CategoryList from "./../../components/category-list/category-list";
interface Props {
  items: Array<any>;
}
const CategoryPage: React.FC<Props> = (props: Props) => {
  const {items} = props;
  return (
    <div>
      <CategoryList items={items} />
    </div>
  );
};

export default CategoryPage;
