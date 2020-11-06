import * as React from "react";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="container-fluid">
        <div className="about__inner">
          <div className="about__content">
            <h2 className="about__title title-h2">
              About <br />
              Our company
            </h2>
            <div className="about__text">
              <p>
                Ltd. "Delva 2" is a leading screw, wire rope and other various
                dealer fasteners in Latvia. The company offers its customers a
                wide range of products from the largest and most modern
                warehouse of fasteners in Latvia.
              </p>
              <a href="#" className="about__btn btn btn_no-bg">
                READ MORE
              </a>
            </div>
          </div>
          <div className="about__slider swiper-container slider">
            <div className="swiper-wrapper">
              <div className="about__slider-item swiper-slide">
                <div className="about__slider-thumb">
                  <img
                    src="./img/content/main-page/about-slide-1.jpg"
                    alt="alt"
                  />
                  <span className="about__slider-date">February 12, 2020</span>
                </div>
                <h3 className="about__slider-title">
                  DELVE 2 STORES WILL BE CLOSED!
                </h3>
              </div>
              <div className="about__slider-item swiper-slide">
                <div className="about__slider-thumb">
                  <img
                    src="./img/content/main-page/about-slide-2.jpg"
                    alt="alt"
                  />
                  <span className="about__slider-date">All of February</span>
                </div>
                <h3 className="about__slider-title">
                  what is good production paper and methods of application
                </h3>
              </div>
              <div className="about__slider-item swiper-slide">
                <div className="about__slider-thumb">
                  <img
                    src="./img/content/main-page/about-slide-1.jpg"
                    alt="alt"
                  />
                  <span className="about__slider-date">February 12, 2020</span>
                </div>
                <h3 className="about__slider-title">
                  DELVE 2 STORES WILL BE CLOSED!
                </h3>
              </div>
              <div className="about__slider-item swiper-slide">
                <div className="about__slider-thumb">
                  <img
                    src="./img/content/main-page/about-slide-2.jpg"
                    alt="alt"
                  />
                  <span className="about__slider-date">All of February</span>
                </div>
                <h3 className="about__slider-title">
                  what is good production paper and methods of application
                </h3>
              </div>
              <div className="about__slider-item swiper-slide">
                <div className="about__slider-thumb">
                  <img
                    src="./img/content/main-page/about-slide-1.jpg"
                    alt="alt"
                  />
                  <span className="about__slider-date">February 12, 2020</span>
                </div>
                <h3 className="about__slider-title">
                  DELVE 2 STORES WILL BE CLOSED!
                </h3>
              </div>
              <div className="about__slider-item swiper-slide">
                <div className="about__slider-thumb">
                  <img
                    src="./img/content/main-page/about-slide-2.jpg"
                    alt="alt"
                  />
                  <span className="about__slider-date">All of February</span>
                </div>
                <h3 className="about__slider-title">
                  what is good production paper and methods of application
                </h3>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
