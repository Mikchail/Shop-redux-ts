import {Dispatch} from "redux";
import {
  LOAD_PRODUCT,
  REMOVE_PRODUCTS_FROM_BASKET,
  ADD_PRODUCT_TO_BASKET,
} from "../types/action-types";
import {InnerItem} from "../types/types-products";
export interface loadProducts {
  type: LOAD_PRODUCT;
  payload: [];
}
export interface addProductsToBasket {
  type: ADD_PRODUCT_TO_BASKET;
  payload: {
    item: InnerItem,
    amount: number
  };
}
export interface removeProductsFromBasket {
  type: REMOVE_PRODUCTS_FROM_BASKET;
  payload: string | number;
}
export const setItems = (items: []): loadProducts => ({
  type: LOAD_PRODUCT,
  payload: items,
});
export const addProductsToBasket = (
  item: InnerItem,
  amount: number
): addProductsToBasket => {
  const payload = {
    item,
    amount,
  };
  return {
    type: ADD_PRODUCT_TO_BASKET,
    payload: payload,
  };
};
export const removeProductsFromBasket = (
  id: string | number
): removeProductsFromBasket => ({
  type: REMOVE_PRODUCTS_FROM_BASKET,
  payload: id,
});

export const fetchItems = () => async (dispatch: Dispatch, _getState, api) => {
  const items = await api.get("prod.json").then((res) => res.data);
  dispatch(setItems(items));
};

function changeId(tharr) {
  if (!tharr) return;
  return tharr.map((it, index) => {
    return {
      ...it,
      id: Math.random().toString(16).slice(2),
      items: changeId(it.items),
    };
  });
}

// function changeItems(items){
//   return items.map((it)=>{
//     return it.parent.map((paren)=>{
//       return paren.items.map((its)=>{
//         return {...its,id: Math.random().toString(16).slice(2) }
//       })
//     })
//   })
// }
