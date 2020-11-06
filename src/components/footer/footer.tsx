import * as React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="main-footer__navigation">
          <div className="main-footer__logo">
            <a href="#" className="footer-logo" aria-label="Delve 2">
              <img src="./img/general/logo.png" alt="Delve 2" />
            </a>
          </div>
          <div className="main-footer__menu">
            <div className="main-footer__menu-item">
              <h3 className="main-footer__menu-title main-footer__title">
                Information
              </h3>
              <ul className="main-footer__menu-list">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Wholesale</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </div>
            <div className="main-footer__menu-item main-footer__menu-products">
              <h3 className="main-footer__menu-title main-footer__title">
                production
              </h3>
              <ul className="main-footer__menu-list">
                <li>
                  <a href="#">Screws</a>
                </li>
                <li>
                  <a href="#">Technical aerosols</a>
                </li>
                <li>
                  <a href="#">Fasteners (cables, chains)</a>
                </li>
                <li>
                  <a href="#">Industrial paper</a>
                </li>
                <li>
                  <a href="#">Work gloves</a>
                </li>
                <li>
                  <a href="#">Nuts and washers</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-footer__contacts">
            <h3 className="main-footer__title">Contacts</h3>
            <a
              href="tel:37167421288"
              className="main-footer__phone"
              target="_blank"
              rel="nofollow"
            >
              +371 67421288
            </a>
            <a
              href="mailto:"
              className="main-footer__mail"
              target="_blank"
              rel="nofollow"
            >
              info@delve2.lv
            </a>
          </div>
        </div>
      </div>
      <div className="main-footer__meta">
        <div className="container-fluid">
          <div className="main-footer__meta-inner">
            <div className="copyright">
              © 2018 Delve 2 sia. All rights reserved.
            </div>
            <div className="developed">
              <span>Developed:</span>
              <a href="#" target="_blank" rel="nofollow">
                Clarus
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
