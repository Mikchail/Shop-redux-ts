import {Dispatch} from "redux";
import {LOAD_PRODUCT} from "../types/action-types";

export interface loadProducts {
  type: LOAD_PRODUCT;
  payload: [];
}

export const setItems = (items: []): loadProducts => ({
  type: LOAD_PRODUCT,
  payload: items,
});

export const fetchItems = () => async (dispatch: Dispatch, _getState, api) => {

  const items = await api.get("products.json").then((res) => res.data);

  dispatch(setItems(items));
};
