
import {loadProducts} from '../../actions/products'
import { LOAD_PRODUCT } from './../../types/action-types';
type StateProduct = {
  products: []
}


const initialState:StateProduct = {
  products: []
} 

export const reducer = (state: StateProduct = initialState,action: loadProducts):StateProduct => {
  switch(action.type){
    case LOAD_PRODUCT:
      return {...state,products: action.payload}
    default:
        return state
  }
}