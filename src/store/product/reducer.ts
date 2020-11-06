
import {loadProducts} from '../../actions/products'

type StateProduct = {
  product: []
}


const initialState:StateProduct = {
  product: []
} 

export const reducer = (state: StateProduct = initialState,action: loadProducts):StateProduct => {
  switch(action.type){
    case `LOAD_PRODUCT`:
      return {...state,product: action.payload}
    default:
        return state
  }
}