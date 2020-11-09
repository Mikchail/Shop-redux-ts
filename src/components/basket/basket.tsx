import * as React from "react";

const Basket = () => {
  return (
    <React.Fragment>
      <div className="shopping">
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

            <div className="shopping__list">
              <ul className="shopping__item">
                <li>DIN 316</li>
                <li>WING SCREWS, M4X10, ZN</li>
                <li>100</li>
                <li>
                  <input type="number" className="quantity" value="100" />
                </li>
                <li>1500$</li>
                <li>
                  <button type="button" className="remove-cart"></button>
                </li>
              </ul>
              <ul className="shopping__item">
                <li>DIN 316</li>
                <li>WING SCREWS, M4X10, ZN</li>
                <li>100</li>
                <li>
                  <input type="number" className="quantity" value="1000" />
                </li>
                <li>1500$</li>
                <li>
                  <button type="button" className="remove-cart"></button>
                </li>
              </ul>
              <ul className="shopping__item">
                <li>DIN 316</li>
                <li>WING SCREWS, M4X25, ZN</li>
                <li>100</li>
                <li>
                  <input type="number" className="quantity" value="10000" />
                </li>
                <li>1500$</li>
                <li>
                  <button type="button" className="remove-cart"></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts-form">
        <div className="container-fluid">
          <form action="/" className="form">
            <div className="form__inner">
              <h2 className="form__title">CUSTOMER DATA</h2>
              <div className="form__content">
                <div className="form__column">
                  <input
                    type="text"
                    name="Company name"
                    placeholder="Company name *"
                    className="form__field"
                  />
                  <input
                    type="text"
                    name="Contact person"
                    placeholder="Contact person *"
                    className="form__field error"
                  />
                  <input
                    type="text"
                    name="Phone"
                    placeholder="Phone *"
                    className="form__field"
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email address *"
                    className="form__field"
                    required
                  />
                </div>
                <div className="form__column">
                  <textarea
                    name="Message"
                    placeholder="Comment"
                    className="form__field"
                  ></textarea>
                </div>
              </div>
              <div className="form__footer">
                <div className="form__error">Enter a contact person</div>
              </div>
            </div>
            <div className="form__btn-box">
              <div className="form__btn-item">
                <a href="#" className="form__meta-btn print-order">
                  PRINT ORDER PAGE
                </a>
                <a href="#" className="form__meta-btn info-order">
                  TERMS & CONDITIONS
                </a>
              </div>
              <div className="form__btn-item">
                <a href="#" className="btn btn_no-bg">
                  CONTINUE SHOPPING
                </a>
                <button type="submit" className="btn checkout-btn">
                  CHECKOUT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Basket;

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
