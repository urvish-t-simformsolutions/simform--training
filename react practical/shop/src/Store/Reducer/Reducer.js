
import * as actionTypes from "../Action/actionType";


const initialState = {
    pillows: null,
    cart: [],
    totalPrice: 0,
}

const setData = (state, action) => {
    console.log(state)
    console.log("action data", action.data)

    return {
        ...state,
        pillows: action.data
    }
}

const priceUpdate = (state, action) => {
    var price = 0
    console.log("pillos", state.pillows)
    state.cart.map((_, i) => {
        price = price + (state.cart[i].cart.price * state.cart[i].quantity)
    })
    return {
        ...state,
        totalPrice: price
    }
}

const addToCart = (state, action) => {
    console.log("bbhhb", action)
    return {
        ...state,
        cart: state.cart.concat([action.cart])
    }
}

const removeFromCart = (state, action) => {
    const removeEle = (state, index) => {
        let newArray = [...state.cart]
        newArray.splice(index, 1)
        priceUpdate(state, action)
        return newArray
    }
    return {
        ...state,
        cart: removeEle(state, action.index)
    }
}

const increment = (state, action) => {
    state.cart.map((item, i) => {
        // console.log(i)
        // console.log(action.index)
        //console.log("before", item.quantity)
        if (i === action.index && item.quantity < 10) {
            item.quantity = item.quantity + 1;
        }
        //  console.log("after", item.quantity)
    })
    priceUpdate(state, action)
    // console.log(state)
    return {
        ...state
    }
}



const decrement = (state, action) => {
    state.cart.map((item, i) => {
        if (i === action.index && item.quantity > 1) {
            item.quantity = item.quantity - 1;
        }
    })
    priceUpdate(state, action)
    return {
        ...state,
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART: return addToCart(state, action)
        case actionTypes.INCREMENT_QUANTITY: return increment(state, action)
        case actionTypes.DECREMENT_QUANTITY: return decrement(state, action)
        case actionTypes.PRICE_UPDATE: return priceUpdate(state, action)
        case actionTypes.REMOVE_FROM_CART: return removeFromCart(state, action)
        case actionTypes.SET_DATA: return setData(state, action)


        default:
            return state
    }
}

export default reducer

