import * as React from "react";
import {Link} from "react-router-dom";
import {getBasket} from "../../store/product/selectors";
import {menu} from "../../mocks/menu-mock";
import {routers} from "./../../const/const";
import {connect} from "react-redux";
import {BasketItem} from "./../../types/types-products";

type Props = {
  title?: string;
  basket: Array<BasketItem>;
};

const Header: React.FC<Props> = (props: Props) => {
  const {basket} = props;
  return (
    <header className="main-header">
      <div className="container-fluid">
        <div className="main-header__inner">
          <Link to="/" className="logo" aria-label="Delve 2">
            <img src="./img/general/logo.png" alt="Delve 2" />
          </Link>
          <a href="tel:+37167421288" className="main-header__phone">
            +371 67421288
          </a>
          <ul className="main-header__menu">
            {menu.map((element, index) => {
              return (
                <li key={element.title + index} className={element.className}>
                  <Link
                    to={`/${element.link.toLowerCase()}`}
                    className={`main-header__menu-item ${
                      element.rowMenu ? " arrow-icon" : ""
                    }`}
                  >
                    {element.title}
                  </Link>
                  {element.innerMenu && (
                    <ul className="main-header__submenu">
                      {element.innerMenu.map((elementInner, indexInner) => {
                        return (
                          <li key={elementInner.title + indexInner}>
                            {element.rowMenu && element.rowMenu ? (
                              <Link
                                to={`${
                                  routers.PRODUCTS
                                }/${elementInner.link.toLowerCase()}`}
                              >
                                <span
                                  className={`main-header__submenu-icon icon-${
                                    indexInner + 1
                                  }`}
                                ></span>
                                <span className="main-header__submenu-label">
                                  {elementInner.title}
                                </span>
                              </Link>
                            ) : (
                              <a href="#">{elementInner.title}</a>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <Link to={`${routers.BASKET}`} className="cart-link">
            {!!basket.length && (
              <span className="cart-link__counter">{basket.length}</span>
            )}
          </Link>
          <button className="menu-btn" aria-label="Menu"></button>
        </div>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => ({
  basket: getBasket(state),
});
export {Header};
export default connect(mapStateToProps)(Header);
