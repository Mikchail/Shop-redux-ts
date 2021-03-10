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



interface IFormValues {
  company_name: string;
  contact_person: string;
  phone: string;
  email: string;
  message: string;
}

export { InnerMenu, Menu, IFormValues }