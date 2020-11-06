 
import { Dispatch } from 'redux';
import { LOAD_PRODUCT } from '../types/action-types'

export interface loadProducts {
  type: LOAD_PRODUCT;
  payload: [];
}

export const setItems = (items:[]): loadProducts => ({
  type: LOAD_PRODUCT,
  payload: items
});




export const fetchItems = () => async (dispatch: Dispatch) => {
  console.log(dispatch);

  const items = await fetch('api/products.json', {
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json());
  
  dispatch(setItems(items));
};