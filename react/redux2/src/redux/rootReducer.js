import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import IcecreamReducer from './icecream/icecreamReducer'

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:IcecreamReducer,
    

})

export default rootReducer