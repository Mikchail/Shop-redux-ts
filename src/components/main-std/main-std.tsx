import * as React from "react";

const MainStd = () => {
  return (
    <div className="hero">
      <picture>
        <source
          srcSet="./img/content/main-page/main-hero_bg.webp"
          type="image/webp"
        />
        <img
          src="./img/content/main-page/main-hero_bg.jpg"
          className="hero__thumb bg-thumb"
          alt="alt"
        />
      </picture>
      <div className="container-fluid">
        <div className="hero__inner">
          <h1 className="hero__title">
            <span>SCREWS</span>
            <span>WIRE ROPES</span>
            <span>FASTENERS</span>
            <span>TOOLS</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MainStd;