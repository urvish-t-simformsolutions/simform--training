import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import cartReducer from "./Store/Reducer/cartReducer"
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import profileReducer from './Store/Reducer/profileReducer';
import productReducer from './Store/Reducer/productReducer';

const rootReducer = combineReducers({
  cartDetail: cartReducer,
  profileDetail: profileReducer,
  productData: productReducer
})
const store = createStore(rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
