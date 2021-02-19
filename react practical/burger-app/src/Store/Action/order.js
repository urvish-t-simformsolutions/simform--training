import * as actionTypes from '../Action/actionTypes'
import axios from '../../Axios-Orders'

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        id: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHARE_BURGER_START
    }
}

export const purchaseBurger = (orderData, token) => {
    return {
        type: actionTypes.PURCHASE_BURGER,
        orderData,
        token
    }
    // return dispatch => {
    //     dispatch(purchaseBurgerStart());
    //     axios.post('/orders.json?auth=' + token, orderData)
    //         .then(response => {
    //             dispatch(purchaseBurgerSuccess(response.data.name, orderData))
    //         })
    //         .catch(error => {
    //             dispatch(purchaseBurgerFail(error))
    //         })
    // }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDER_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START
    }
}

export const fetchOrders = (token, userId) => {
    return {
        type: actionTypes.FETCH_ORDER,
        token,
        userId
    }
    // return dispatch => {
    //     dispatch(fetchOrdersStart())
    //     const queryParam = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'
    //     axios.get('/orders.json' + queryParam)
    //         .then(res => {
    //             const fetchOrders = [];
    //             for (let keys in res.data) {
    //                 fetchOrders.push({
    //                     ...res.data[keys],
    //                     id: keys
    //                 })
    //             }
    //             dispatch(fetchOrdersSuccess(fetchOrders))
    //         })
    //         .catch(err => {
    //             dispatch(fetchOrdersFail(err))
    //         })

    // }
}