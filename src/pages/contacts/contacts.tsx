import * as React from "react";
import FormContact from "../../components/form-contact/form-contact";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import MapGoogle from "./../../components/map/map";
import ContactsList from "./../../components/contacts-list/contacts-list";

const Contacts = () => {
  return (
    <React.Fragment>
      <Breadcrumbs />
      {/* <FormContact /> */}
      <MapGoogle />
      <ContactsList />
    </React.Fragment>
  );
};

export default Contacts;
