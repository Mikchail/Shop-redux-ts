import {NameSpace} from '../../name-space'

export const getProducts = (state) =>{
  return state[NameSpace.PRODUCTS].products
}