import { faker } from '@faker-js/faker';
import React, { createContext, useReducer, useContext } from 'react';
import {cartReducer, productReducer} from './Reducers';

const Cart = createContext();
faker.seed(99);
const Context = ({children}) => {
    const Products =[...Array(50)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.image(),
        inStock:faker.helpers.arrayElement([0,3,5,6,7]),
        fastDelivary: faker.datatype.boolean(),
        rating:faker.helpers.arrayElement([0,3,5,6,7]),
        description:faker.commerce.productDescription(),
    }))
    console.log(Products);

    const [state, dispatch] = useReducer(cartReducer, {
        products:Products,
        Cart:[]
    });

    const [productState, productDispatch] = useReducer(productReducer, {
      byStock:false,
      byFastDelivary:false,
      byRatings:0,
      searchQuery:'',
    })
  return (
    <Cart.Provider value={{state, dispatch, productState, productDispatch}}>{children}</Cart.Provider>
  )
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
  };