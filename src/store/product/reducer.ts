import {
  loadProducts,
  addProductsToBasket,
  removeProductsFromBasket,
} from "../../actions/products";
import {extend} from "../../utils";
import {
  LOAD_PRODUCT,
  ADD_PRODUCT_TO_BASKET,
  REMOVE_PRODUCTS_FROM_BASKET,
} from "./../../types/action-types";
type StateProduct = {
  products: [];
  basket: [];
};

const initialState: StateProduct = {
  products: [],
  basket: [],
};

function updateBasketItems(basket, item, index) {
  if (item.count === 0) {
    const newArray = basket.slice(0, index).concat(basket.slice(index + 1));
    return newArray;
  }

  if (index === -1) {
    return [].concat([item]).concat(basket.slice());
  }

  const newArray = basket
    .slice(0, index)
    .concat([item], basket.slice(index + 1));
  return newArray;
}

function updateBasketItem(item, itemInBasket, amount) {
  if (itemInBasket) {
    return {
      ...itemInBasket,
      count: itemInBasket.count + amount,
      price: item.price,
      total: itemInBasket.total + item.price * amount,
    };
  }

  return {
    ...item,
    count: 1,
    total: item.price,
  };
}

function updateBasket(state, product, amount) {
  console.log(product);
  const id = 2;
  // const item = state.products.find((good) => good.id === id);
  const index = state.basket.findIndex((b) => b.id === product.id);
  const itemInBasket = state.basket[index];
  const newItem = updateBasketItem(product, itemInBasket, amount);

  if (amount > 0 && itemInBasket && itemInBasket.count >= newItem.quantity) {
    return state;
  }
  return extend(state, {
    basket: updateBasketItems(state.basket, newItem, index),
  });
}

export const reducer = (
  state: StateProduct = initialState,
  action: loadProducts | addProductsToBasket | removeProductsFromBasket
): StateProduct => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return {...state, products: action.payload};
    case ADD_PRODUCT_TO_BASKET:
      return updateBasket(state, action.payload, +1);
    case REMOVE_PRODUCTS_FROM_BASKET:
      const item = state.basket.find(({id}) => id === action.payload);
      // item.count
      return updateBasket(state, action.payload, -1);
    default:
      return state;
  }
};
