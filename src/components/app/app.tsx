import * as React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {routers} from "../../const/const";

import Main from "../../pages/main/main";
import Contacts from "../../pages/contacts/contacts";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CategoryPage from './../../pages/category/category';

import {strews} from "../../mocks/product-strew";
import ProductListAndItem from './../products/products';

interface Props {}

const App: React.FC<Props> = (props) => {
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
        <Route path={`${routers.PRODUCTS}`}>
          <ProductListAndItem />
        </Route>
        {/* <Route path="/fasteners/:title?" render={(routerProps) => { */}
        <Route path={`${routers.FASTENERS}/:title?/:id?`} render={(routerProps) => {
          const title = routerProps.match.params.title
          let itemsParent = strews
          if(title){
            let child = strews.find((it)=>it.link === title)
            return <CategoryPage items={child.items} />
          }
          return <CategoryPage items={itemsParent} />

        }} />
        <Route>
          <h3>Ничего</h3>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
