
import * as actionTypes from './actionType'
import axios from "../../axios-data.js"
//import axios from "axios"

export const setData = () => {
    console.log("setData")
    return dispatch => {
        axios.get("/pillows.json")
            .then(res => {
                dispatch(assignData(res.data))
                dispatch(priceUpdate())

            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const setFormDetails = (details) => {
    console.log("detailset")
    return dispatch => {
        axios.post("/userDetails.json", details)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const updateFormDetails = ()=>{
    
}
export const assignData = (data) => {
    return {
        type: actionTypes.SET_DATA,
        data
    }
}


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