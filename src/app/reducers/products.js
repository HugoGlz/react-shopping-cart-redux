import {GET_PRODUCTS} from '../constants/ProductActionTypes';

const initialState =
  {
    loading : true,
    list: [],
    error,
    cart: []
  };

export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_PENDING:
      return {
          ...state,
          loading: true
        }
      ;

    case GET_PRODUCTS_FULFILLED:
      return {
          ...state,
          loading: false,
          list: action.payload.data
        }
      ;

   case GET_PRODUCTS_REJECTED:
      return {
          ...state,
          loading: false,
          error: true
        }
      ;

  case ADD_TO_CART:
    return {
      ...state,
      cart: state.cart.concat([action.payload])
    }

   case 'DROP_PRODUCT':
    const carList = state.cart.concat([]);
    cartList.splice(action.payload,1)

    return {
      ...state,
      cart: cartList
    }

    default:
      return state;
  }
}
