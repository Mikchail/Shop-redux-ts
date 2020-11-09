import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getProducts} from "../../store/product/selectors";
import {fetchItems} from "../../actions/products";
import {ProductTypes} from "../../types/types-products";
import { routers } from './../../const/const';


interface Products {
  id: string;
  name: string;
  src: string;
  link: string;
  price: number;
}

interface Props {
  products: Array<ProductTypes>;
}
 
const ProductListAndItem = (props: Props) => {
  const {products} = props;
  
  return (
    <div className="products">
      <div className="container-fluid">
        <h2 className="products__title title-h2">Products</h2>
        <ul className="products__list">
          {products &&
            products.map((product) => {
              return (
                <li key={product.id} className="products__item">
                  <Link to={`${routers.PRODUCTS}/${product.link}`} className="products__link">
                    <span className="products__thumb">
                      <img src={product.src} alt={product.title} />
                    </span>
                    <span className="products__link-title">{product.title}</span>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: getProducts(state),
});
const mapDispatchToProps = (dispatch) => ({
  loadProduct: () => {
    dispatch(fetchItems());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductListAndItem);
