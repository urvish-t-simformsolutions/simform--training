import { put } from 'redux-saga/effects'
import * as actions from '../Action/index'
import axios from '../../Axios-Orders'

export function* initIngredientsSaga(action) {
    try {
        const response = yield axios.get('https://burger-db-5f571-default-rtdb.firebaseio.com/ingredients.json')
        yield put(actions.setIngredients(response.data))
    } catch (error) {
        yield put(actions.fetchIngredientsFailed())
    }

}