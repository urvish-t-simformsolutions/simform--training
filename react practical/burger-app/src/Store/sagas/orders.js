import { put } from 'redux-saga/effects'
import * as actions from '../Action/index'
import axios from '../../Axios-Orders'

export function* purchaseBurgerSaga(action) {
    yield put(actions.purchaseBurgerStart());
    try {
        const response = yield axios.post('/orders.json?auth=' + action.token, action.orderData)
        yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData))
    } catch (error) {
        yield put(actions.purchaseBurgerFail(error))
    }
}
export function* fetchOrdersSaga(action) {

    yield put(actions.fetchOrdersStart())

    const queryParam = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
    try {
        const response = yield axios.get('/orders.json' + queryParam)

        const fetchOrders = [];
        for (let keys in response.data) {
            fetchOrders.push({
                ...response.data[keys],
                id: keys
            })
        }
        yield put(actions.fetchOrdersSuccess(fetchOrders))

    } catch (err) {
        yield put(actions.fetchOrdersFail(err))
    }

}
