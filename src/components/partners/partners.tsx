import * as React from "react";

const Partners = () => {
  return (
    <div className="partners">
      <div className="container-fluid">
        <div className="partners__inner">
          <div className="partners__content">
            <h2 className="partners__title title-h2">Partners</h2>
            <a href="#" className="partners__all">
              View all
            </a>
          </div>
          <div className="partners__slider swiper-container slider">
            <div className="swiper-wrapper">
              <div className="partners__slider-item swiper-slide">
                <a href="#" target="_blank" rel="nofollow">
                  <img src="./img/content/main-page/Partners-1.png" alt="alt" />
                </a>
              </div>
              <div className="partners__slider-item swiper-slide">
                <a href="#" target="_blank" rel="nofollow">
                  <img src="./img/content/main-page/Partners-2.png" alt="alt" />
                </a>
              </div>
              <div className="partners__slider-item swiper-slide">
                <a href="#" target="_blank" rel="nofollow">
                  <img src="./img/content/main-page/Partners-3.png" alt="alt" />
                </a>
              </div>
              <div className="partners__slider-item swiper-slide">
                <a href="#" target="_blank" rel="nofollow">
                  <img src="./img/content/main-page/Partners-4.png" alt="alt" />
                </a>
              </div>
              <div className="partners__slider-item swiper-slide">
                <a href="#" target="_blank" rel="nofollow">
                  <img src="./img/content/main-page/Partners-5.png" alt="alt" />
                </a>
              </div>
              <div className="partners__slider-item swiper-slide">
                <a href="#" target="_blank" rel="nofollow">
                  <img src="./img/content/main-page/Partners-1.png" alt="alt" />
                </a>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
