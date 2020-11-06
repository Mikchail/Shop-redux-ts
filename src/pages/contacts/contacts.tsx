import * as React from "react";
import FormContact from "../../components/form-contact/form-contact";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";

const Contacts = () => {
  return (
    <React.Fragment>
      <Breadcrumbs />
      <FormContact />
    </React.Fragment>
  );
};

export default Contacts;
