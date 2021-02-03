import {createStore, applyMiddleware} from 'redux'
//import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
//import {} from 'redux-devtools-extension'

//const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer,applyMiddleware(logger))
export default store