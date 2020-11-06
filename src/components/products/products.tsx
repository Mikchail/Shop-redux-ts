import * as React from "react";

const ProductListAndItem = () => {
  return (
    <div className="products">
      <div className="container-fluid">
        <h2 className="products__title title-h2">Products</h2>
        <ul className="products__list">
          <li className="products__item">
            <a href="#" className="products__link">
              <span className="products__thumb">
                <img src="./img/content/main-page/dlv1.jpg" alt="alt" />
              </span>
              <span className="products__link-title">Screws</span>
            </a>
          </li>
          <li className="products__item">
            <a href="#" className="products__link">
              <span className="products__link-title">Nuts and washers</span>
              <span className="products__thumb">
                <img src="./img/content/main-page/dlv2.jpg" alt="alt" />
              </span>
            </a>
          </li>
          <li className="products__item">
            <a href="#" className="products__link">
              <span className="products__link-title">Fasteners</span>
              <span className="products__thumb">
                <img src="./img/content/main-page/dlv3.jpg" alt="alt" />
              </span>
            </a>
          </li>
          <li className="products__item">
            <a href="#" className="products__link">
              <span className="products__link-title">Technical aerosols</span>
              <span className="products__thumb">
                <img src="./img/content/main-page/dlv4.jpg" alt="alt" />
              </span>
            </a>
          </li>
          <li className="products__item">
            <a href="#" className="products__link">
              <span className="products__link-title">Industrial paper</span>
              <span className="products__thumb">
                <img src="./img/content/main-page/dlv5.jpg" alt="alt" />
              </span>
            </a>
          </li>
          <li className="products__item">
            <a href="#" className="products__link">
              <span className="products__link-title">Work gloves</span>
              <span className="products__thumb">
                <img src="./img/content/main-page/dlv6.jpg" alt="alt" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductListAndItem;
