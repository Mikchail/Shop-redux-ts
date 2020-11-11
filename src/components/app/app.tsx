import * as React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {routers} from "../../const/const";

import Main from "../../pages/main/main";
import Contacts from "../../pages/contacts/contacts";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CategoryPage from "./../../pages/category/category";

import {strews} from "../../mocks/product-strew";
import ProductListAndItem from "./../products/products";
import ProductsList from "../products-list/products-list";
import RoutersOfProducts from "../routers-products/routers-products";
import {fetchItems} from "./../../actions/products";
import {getProducts,getBasket} from "./../../store/product/selectors";
import {connect} from "react-redux";
import {ProductTypes} from "../../types/types-products";
import BasketPage from './../../pages/basket-page/basket-page';



interface Props {
  loadProduct: () => void;
  
  products: Array<ProductTypes>;
}

const App: React.FC<Props> = (props: Props) => {
  const {loadProduct, products} = props;
  React.useEffect(() => {
    loadProduct();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path={`${routers.CONTACTS}`}>
          <Contacts />
        </Route>
        <Route exact path={`${routers.PRODUCTS}`}>
          <ProductListAndItem products={products} />
        </Route>
        <Route exact path={`${routers.BASKET}`}>
          <BasketPage/>
        </Route>
        <RoutersOfProducts products={products}/>
       
        <Route>
          <h3>Ничего</h3>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
