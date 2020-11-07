import * as React from "react";
import {connect} from "react-redux";
import {fetchItems} from "../../actions/about-us";
import {getAboutUs} from "../../store/about-us/selectors";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
interface AboutUs {
  id: string;
  title: string;
  src: string;
  link: string;
  date: string;
  price: number;
}

interface Props {
  aboutUs: Array<AboutUs>;
  loadAboutUs: () => void;
}

const AboutUs = (props: Props) => {
  const {aboutUs, loadAboutUs} = props;
  console.log(aboutUs);

  React.useEffect(() => {
    loadAboutUs();
  }, []);
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

          <Swiper
            className={`about__slider`}
            spaceBetween={30}
            slidesPerView={2}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {aboutUs &&
              aboutUs.map((item) => {
                return (
                  <SwiperSlide
                    key={item.id}
                    className={"about__slider-item"}
                  >
                    <div className="about__slider-thumb">
                      <img src={item.src} alt="alt" />
                      <span className="about__slider-date">{item.date}</span>
                    </div>
                    <h3 className="about__slider-title">{item.title}</h3>
                  </SwiperSlide>
                );
              })}
          </Swiper>

          {/* <div className="swiper-pagination"></div> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  aboutUs: getAboutUs(state),
});
const mapDispatchToProps = (dispatch) => ({
  loadAboutUs: () => {
    dispatch(fetchItems());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
