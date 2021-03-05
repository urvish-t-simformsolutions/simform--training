
import * as actionTypes from './actionType'

export const addToCart = (cart, quantity) => {
    return {
        type: actionTypes.ADD_TO_CART,
        cart: {
            cart,
            quantity
        }
    }
}

export const removeFromCart = (index) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        index
    }
}

export const increment = (index) => {
    console.log("actionIn")
    return {
        type: actionTypes.INCREMENT_QUANTITY,
        index
    }
}

export const decrement = (index) => {
    console.log("actionDe")
    return {
        type: actionTypes.DECREMENT_QUANTITY,
        index
    }
}

export const priceUpdate = () => {
    return {
        type: actionTypes.PRICE_UPDATE
    }
}