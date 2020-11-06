import * as React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Main from "../../pages/main/main";
import Contacts from "../../pages/contacts/contacts";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route>
          <h3>Ничего</h3>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
