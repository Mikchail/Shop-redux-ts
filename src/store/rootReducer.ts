import {combineReducers } from 'redux'
import {reducer as products} from './product/reducer'
import {NameSpace} from '../name-space';

export default combineReducers({
  [NameSpace.PRODUCTS] : products
})