import * as React from "react";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <div className="container-fluid">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumbs__item">
            <span>Screws</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Breadcrumbs;
