
import * as actionTypes from './actionType'

export const addToCart = (cart, quantity, price) => {
    return {
        type: actionTypes.ADD_TO_CART,
        cart: cart,
        price: price,
        quantity: quantity
    }
}
