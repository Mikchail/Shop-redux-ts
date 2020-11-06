type InnerMenu = {
  title: string;
  link: string;
};

type Menu = {
  title: string;
  link: string;
  phone?: string;
  className?: string;
  innerMenu?: Array<InnerMenu>;
  rowMenu?: boolean;
  column?: boolean;
};





export {InnerMenu,Menu}