import React from 'react'
import { ADD_TO_CART } from '../../../constants';

const addToCart = (data) => {
  return {
    type: 'ADD_TO_CART',
    data: data
  }
}

export default addToCart;