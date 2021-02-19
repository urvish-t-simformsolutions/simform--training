import * as actionTypes from '../Action/actionTypes';
import { updateObject } from '../../shared/utility'


const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const purchaseInit = (state, action) => {
    return updateObject(state, { pruchased: false })
}
const purchaseBurgerStart = (state, action) => {
    return updateObject(state, { loading: true })
}
const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, { id: action.id })
    return updateObject(state, {
        orders: state.orders.concat(newOrder),
        loading: false,
        purchased: true
    })
}
const purchaseBurgerFail = (state, action) => {
    return updateObject(state, { loading: false })
}
const fetchOrdersStart = (state, action) => {
    return updateObject(state, { loading: true })
}
const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false
    })
}
const fetchOrdersFail = (state, action) => {
    return updateObject(state, { loading: false })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return purchaseInit(state, action)

        case actionTypes.PURCHARE_BURGER_START:
            return purchaseBurgerStart(state, action)

        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action)

        case actionTypes.PURCHASE_BURGER_FAILED:
            return purchaseBurgerFail(state, action)

        case actionTypes.FETCH_ORDER_START:
            return fetchOrdersStart(state, action)

        case actionTypes.FETCH_ORDER_SUCCESS:
            return fetchOrdersSuccess(state, action)


        case actionTypes.FETCH_ORDER_FAIL:
            return fetchOrdersFail(state, action)

        default:
            return state
    }
}

export default reducer