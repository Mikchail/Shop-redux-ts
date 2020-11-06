import * as React from "react";
import * as ReactDom from "react-dom";
import {Provider} from 'react-redux'
import App from "./components/app/app";
import { store } from './store/configStore'

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector("#root"));
