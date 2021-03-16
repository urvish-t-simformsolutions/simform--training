
import * as actionTypes from './actionType'
import axios from "../../axios-data.js"
//import axios from "axios"


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

// export const setData = (value) => {
//     return dispatch => {
//         axios.get("/pillows.json")
//             .then(res => {
//                 if (value === undefined) {
//                     dispatch(assignData(res.data))
//                 }
//                 else {

//                     const newTerm = res.data.filter((item) => item.type.toLowerCase().includes(value.toLowerCase()))

//                     dispatch(assignData(newTerm))
//                 }
//                 //  dispatch(priceUpdate())

//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }
// }

// export const showFormDetails = () => {
//     return dispatch => {
//         axios.get("/userDetails.json")
//             .then(res => {
//                 console.log("user", res.data)
//                 dispatch({ type: actionTypes.GET_FORM_DETAILS })
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }
// }

// export const setFormDetails = (details) => {
//     console.log("detailset")
//     return dispatch => {
//         axios.post("/userDetails.json", details)
//             .then(res => {
//                 console.log(res)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }
// }

// export const updateFormDetails = (details) => {
//     return dispatch => {
//         axios.get("/userDetails.json")
//             .then(res => {
//                 console.log("get data", res.data)
//                 // console.log(res.data.name);
//                 let key = Object.keys(res.data)
//                 Object.keys(res.data).map((item, index) => {
//                     // console.log("keys", item);
//                     key = item
//                     if (details.id === res.data[item].id) {

//                         axios.put("/userDetails/" + key + "/details.json", details.details)
//                             .then(res => {
//                                 console.log(res.data)
//                             })
//                             .catch(error => {
//                                 console.log(error)
//                             })
//                     }
//                 })
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }
// }
// export const assignData = (data) => {
//     return {
//         type: actionTypes.SET_DATA,
//         data
//     }
// }

