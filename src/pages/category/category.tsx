import * as React from "react";
import CategoryList from "./../../components/category-list/category-list";
import {CategoryItemTypes} from "../../types/types-products";
import Breadcrumbs from "./../../components/breadcrumbs/breadcrumbs";
import FormSearch from "../../components/form-search/form-serch";
interface Props {
  items: Array<CategoryItemTypes>;
  match: any;
  title: string
}
const CategoryPage: React.FC<Props> = (props: Props) => {
  const {items, match,title} = props;
  return (
    <React.Fragment>
      <Breadcrumbs match={match} />
      <div className="page-title">
        <div className="container-fluid">
          <div className="page-title__content">
            <h1 className="page-title__text">{title}</h1>
          </div>
        </div>
      </div>
      <div className="page-content">
        <FormSearch className={`search_page`} />
        <CategoryList match={match} items={items} />
      </div>
    </React.Fragment>
  );
};

export default CategoryPage;
