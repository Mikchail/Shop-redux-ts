import * as React from "react";
import ShoppingItem from "./../shopping-item/shopping-item";
import Breadcrumbs from "./../breadcrumbs/breadcrumbs";
import { BasketItem } from "./../../types/types-products";
import { connect } from "react-redux";
import { getBasket } from "../../store/product/selectors";
import { Dispatch } from "redux";
import { removeProductsFromBasket } from "./../../actions/products";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import FormContact from "../form-contact/form-contact";
import { IFormValues } from "types/types";

interface Props {
  basket: Array<BasketItem>;
  handlerDeleteFromBasket: () => void;
}

const Basket: React.FC<Props> = (props: Props) => {
  const { basket, handlerDeleteFromBasket } = props;
  const isEmpty = basket && Boolean(basket.length);
  const routeMatch = useRouteMatch();
  console.log(routeMatch);

  const renderList = () => {
    return (
      <div className="shopping__list">
        {basket.map((item, index) => {
          return (
            <ShoppingItem
              key={item.id}
              handlerDeleteFromBasket={handlerDeleteFromBasket}
              item={item}
            />
          );
        })}
      </div>
    )
  }
  const renderProducts = () => {
    if (!isEmpty) {
      return null;
    }
    return (
      <div className="container-fluid">
        <div className="shopping__content">
          <ul className="shopping__header">
            <li>ARTICLE</li>
            <li>DESCRIPTION</li>
            <li>PACK</li>
            <li>QUANTITY</li>
            <li>PRICE</li>
            <li>DELETE</li>
          </ul>
          {renderList()}
        </div>
        <Link className="form__btn btn btn_no-bg" style={{ margin: "auto", display: "flex", alignItems: "center", width: 300 }} to={`${routeMatch.path}/step-two`}>
          step two
        </Link>
      </div>
    )
  }
  const renderEmpty = (): JSX.Element | null => {
    if (isEmpty) {
      return null;
    }
    return (
      <div className="page-content">
        <div className="meta-page">
          <div className="container-fluid">
            <div className="meta-page__content">
              <h1 className="meta-page__title">Your basket is empty</h1>
              <br />
              <Link
                to="/"
                className="meta-page__btn btn btn_no-bg"
              >
                CONTINUE SHOPPING
                </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderTitle = () => {
    return (
      <div className="page-title">
        <div className="container-fluid">
          <div className="page-title__content">
            <h1 className="page-title__text">Shopping bag</h1>
          </div>
        </div>
      </div>
    )
  }

  const submit = (values: IFormValues) => {
    console.log({...values,basket});
  }

  return (
    <React.Fragment>
      <Breadcrumbs />
      {renderTitle()}
      <div className="shopping">
        {renderProducts()}
        {renderEmpty()}

      </div>
      <Switch>
        <Route path={`${routeMatch.path}/`} exact>
        </Route>
        <Route path={`${routeMatch.path}/step-two`} exact>
          <FormContact submit={submit} />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  basket: getBasket(state),
});

const mapDispatchToProps = (dispatch) => ({
  handlerDeleteFromBasket: (id) => {
    dispatch(removeProductsFromBasket(id));
  },
});
export { Basket };
export default connect(mapStateToProps, mapDispatchToProps)(Basket);

{
  /* 
<div className="meta-page">
      <div className="container-fluid">
        <div className="meta-page__content">
          <h1 className="meta-page__title">Thank you for ordering</h1>
          <div className="meta-page__text">
            Your order <b>№123456</b> has been accepted for processing
          </div>
          <a
            data-src="#cart-popup"
            href="javascript:;"
            className="meta-page__btn btn btn_no-bg"
          >
            CONTINUE SHOPPING
          </a>
        </div>
      </div>
    </div>
 */
}
