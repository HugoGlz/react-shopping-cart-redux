import * as types from '../constants/ProductActionTypes';
import axios from 'axios';

export function getProducts() {
  return {
    type: types.GET_PRODUCTS
    payload: axios.get() 
  };
}

export function addToCart(product) {
  return {
   type: types.ADD_TO_CART,
   payload: product
  }
}

export function dropProduct(index) {
  return {
    type: 'DROP_PRODUCT',
    payload: index
  }
}

export function pruebaThunk() {
  return (dispatch, getState) => {
    dispatch(getProducts());
    dispatch(addToCart({name: 'un producto'});
  }
}
