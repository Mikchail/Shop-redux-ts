import {NameSpace} from '../../name-space'

export const getProducts = (state) =>{
  return state[NameSpace.PRODUCTS].products
}
export const getBasket = (state) =>{
  return state[NameSpace.PRODUCTS].basket
}