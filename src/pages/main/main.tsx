import * as React from "react";
import MainStd from "../../components/main-std/main-std";
import FormSearch from "../../components/form-search/form-serch";
import ProductListAndItem from "../../components/products/products";
import AboutUs from "../../components/about-us/about-us";
import Partners from "../../components/partners/partners";

interface Props {}

const Main: React.FC<Props> = (props: Props) => {
  const title: string = `Title`;

  return (
    <React.Fragment>
      <MainStd />
      <FormSearch />
      <ProductListAndItem />
      <AboutUs />
      <Partners />
    </React.Fragment>
  );
};

export default Main;
