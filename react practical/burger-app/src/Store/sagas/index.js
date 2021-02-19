import { takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../Action/actionTypes'
import { authCheckStateSaga, authUserSaga, checkAuthTimeoutSaga, logoutSaga } from './auth'
import { initIngredientsSaga } from './BurgerBuilder'
import { fetchOrdersSaga, purchaseBurgerSaga } from './orders'

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga)
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga)
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga)
    yield takeEvery(actionTypes.AUTH_CHECK_INITIAL_STATE, authCheckStateSaga)
}

export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga)
}

export function* watchOrders() {
    yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga)
    yield takeEvery(actionTypes.FETCH_ORDER, fetchOrdersSaga)
}

