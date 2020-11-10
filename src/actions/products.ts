import {Dispatch} from "redux";
import {LOAD_PRODUCT,REMOVE_PRODUCTS_FROM_BASKET,ADD_PRODUCT_TO_BASKET} from "../types/action-types";

export interface loadProducts {
  type: LOAD_PRODUCT;
  payload: [];
}
export interface addProductsToBasket {
  type: ADD_PRODUCT_TO_BASKET;
  payload: [];
}
export interface removeProductsFromBasket {
  type: REMOVE_PRODUCTS_FROM_BASKET;
  payload: [];
}
export const setItems = (items: []): loadProducts => ({
  type: LOAD_PRODUCT,
  payload: items,
});
export const addProductsToBasket = (item: any): addProductsToBasket => ({
  type: ADD_PRODUCT_TO_BASKET,
  payload: item,
});
export const removeProductsFromBasket = (items: any): removeProductsFromBasket => ({
  type: REMOVE_PRODUCTS_FROM_BASKET,
  payload: items,
});


export const fetchItems = () => async (dispatch: Dispatch, _getState, api) => {

  const items = await api.get("products.json").then((res) => res.data);

  dispatch(setItems(items));
};
