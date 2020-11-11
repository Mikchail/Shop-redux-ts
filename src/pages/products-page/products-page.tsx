import * as React from "react";
import { useHistory } from 'react-router-dom';
import {InnerItem} from "../../types/types-products";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import ProductsList from "../../components/products-list/products-list";
import FormSearch from "../../components/form-search/form-serch";
interface Props {
  items: Array<InnerItem>;
  match: any;
  title: string;
  srcImg: string;
}
const ProductsPage: React.FC<Props> = (props: Props) => {
  const {items, match, title, srcImg} = props;
  let history = useHistory();

  function handleClick(event) {
    event.preventDefault();
    history.goBack();
  }
  return (
    <React.Fragment>
      <Breadcrumbs match={match} />
      <div className="product-hero">
        <div className="container-fluid">
          <div className="product-hero__inner">
            <div className="product-hero__thumb">
              <a
                href="/databank/categories/tree_images_seq5bZ.jpeg"
                className="gallery"
              >
                <img src={srcImg} />
              </a>
            </div>
            <h1 className="product-hero__title">{title}</h1>
            <div className="product-hero__btn">
              <a onClick={handleClick} className="btn btn_no-bg">
                Back to category
              </a>
            </div>
          </div>

          <div className="product-hero__inner prod_text"></div>
        </div>
      </div>
      <div className="page-content">
        <FormSearch className={`search_page`} />
        <ProductsList title={title} items={items} />
      </div>
    </React.Fragment>
  );
};

export default ProductsPage;
