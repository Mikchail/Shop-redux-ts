
import {loadAboutUs} from '../../actions/about-us'
import { LOAD_ABOUT_US } from './../../types/action-types';
type StateAboutUs = {
  aboutUs: []
}


const initialState:StateAboutUs = {
  aboutUs: []
} 

export const reducer = (state: StateAboutUs = initialState,action: loadAboutUs):StateAboutUs => {
  switch(action.type){
    case LOAD_ABOUT_US:
      return {...state,aboutUs: action.payload}
    default:
        return state
  }
}