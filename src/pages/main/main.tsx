import * as React from "react";
import MainStd from '../../components/main_std/main_std'

interface Props {}

const Main: React.FC<Props> = (props: Props) => {
  const title: string = `Title`;

  return (
    <React.Fragment>
      <MainStd/>
    </React.Fragment>
  );
};

export default Main;
