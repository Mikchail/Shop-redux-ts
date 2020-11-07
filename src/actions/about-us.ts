import {Dispatch} from "redux";
import {LOAD_ABOUT_US} from "../types/action-types";

export interface loadAboutUs {
  type: LOAD_ABOUT_US;
  payload: [];
}

export const setItems = (items: []): loadAboutUs => ({
  type: LOAD_ABOUT_US,
  payload: items,
});

export const fetchItems = () => async (dispatch: Dispatch, _getState, api) => {

  const items = await api.get("about-us.json").then((res) => res.data);

  dispatch(setItems(items));
};
