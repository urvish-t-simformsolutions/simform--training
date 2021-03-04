
import * as actionTypes from "../Action/actionType";

const initialState = {
    price: null,
    cart: [],
    quantity: null
}

const addToCart = (state, action) => {
    console.log("bbhhb", action)
    return {
        ...state,
        cart: state.cart.concat([action.cart]),
        price: action.price,
        quantity: action.quantity
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART: return addToCart(state, action)
        default:
            return state
    }
}
export default reducer

