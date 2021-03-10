
import * as actionTypes from './actionType'
import axios from "../../axios-data.js"
//import axios from "axios"

export const setData = () => {
    console.log("setData")
    return dispatch => {
        
        axios.get("https://auth-development-5a0c3-default-rtdb.firebaseio.com/pillows.json")
            .then(res => {
                console.log(res);
                dispatch(assignData(res))
            })
            .catch(error => {
                console.log(error)
            })
    }
}
export const assignData = (data) => {
    return {
        type: actionTypes.SET_DATA,
        data
    }
}
// export const setData = () => {
//     console.log("setData")
//     return dispatch => {
//         axios.get('/pillows.json')
//             .then(res => {
//                 console.log(res)
//                 dispatch(assignData(res))
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }
// }

// export const assignData = (data) => {
//     console.log("assign", data)
//     return {
//         type: actionTypes.SET_DATA,
//         data
//     }
// }

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