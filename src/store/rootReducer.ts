import {combineReducers } from 'redux'
import {reducer as products} from './product/reducer'
import {reducer as aboutUs} from './about-us/reducer'
import {NameSpace} from '../name-space';

export default combineReducers({
  [NameSpace.PRODUCTS] : products,
  [NameSpace.ABOUTUS] : aboutUs
})