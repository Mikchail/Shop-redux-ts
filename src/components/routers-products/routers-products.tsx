import * as React from "react";
import {Route} from "react-router-dom";
import ProductsList from "./../products-list/products-list";
import CategoryPage from "./../../pages/category/category";
import {routers} from "./../../const/const";
import {ProductTypes} from "../../types/types-products";
import ProductsPage from '../../pages/products-page/products-page';

interface Props {
  products: Array<ProductTypes>;
}

const RoutersOfProducts: React.FC<Props> = (props: Props) => {
  const {products} = props;

  return (
    <React.Fragment>
      {products &&
        products.map((product) => {
          return (
            <Route
              key={product.id}
              // item/:id?
              // path={`/${product.link}/:title?`}
              path={`${routers.PRODUCTS}/${product.link}/:title?`}
              render={(routerProps) => {
                const title = routerProps.match.params.title;
                const id = routerProps.match.params.id;
                const match = routerProps.match;
                if (title) {
                  let child = product.items.find((it) => it.link === title);
                  return <ProductsPage title={child.title} srcImg={child.src} match={match} items={child.items} />;
                } else if (title && id) {
                }
                return <CategoryPage match={match} title={product.title} items={product.items}  />;
              }}
            />
          );
        })}
    </React.Fragment>
  );
};

export default RoutersOfProducts;
