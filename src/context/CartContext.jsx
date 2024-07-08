import React, { createContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.cart.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
        return {
          ...state,
          totalQuantity: state.totalQuantity + 1,
          totalAmount: state.totalAmount + existingProduct.price,
        };
      } else {
        const newProduct = { ...action.payload, quantity: 1, totalPrice: action.payload.price };
        return {
          ...state,
          cart: [...state.cart, newProduct],
          totalQuantity: state.totalQuantity + 1,
          totalAmount: state.totalAmount + newProduct.price,
        };
      }
    case 'REMOVE_FROM_CART':
      const filteredCart = state.cart.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        cart: filteredCart,
        totalQuantity: state.totalQuantity - action.payload.quantity,
        totalAmount: state.totalAmount - action.payload.totalPrice,
      };
      case 'INCREASE_QUANTITY':
        const productToIncrease = state.cart.find(item => item.id === action.payload.id);
        productToIncrease.quantity += 1;
        productToIncrease.totalPrice = productToIncrease.quantity * productToIncrease.price;
        return {
          ...state,
          totalQuantity: state.totalQuantity + 1,
          totalAmount: state.totalAmount + productToIncrease.price, 

      };
    case 'DECREASE_QUANTITY':
      const productToDecrease = state.cart.find(item => item.id === action.payload.id);
      if (productToDecrease.quantity > 1) {
        productToDecrease.quantity -= 1;
        productToDecrease.totalPrice = productToDecrease.quantity * productToDecrease.price;
        return {
          ...state,
          totalQuantity: state.totalQuantity - 1,
          totalAmount: state.totalAmount - productToDecrease.price,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
