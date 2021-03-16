
import * as actionTypes from "../Action/actionType";


const initialState = {
    pillows: null
}

const setData = (state, action) => {
    //console.log(state)
    //console.log("action data", action.data)

    return {
        ...state,
        pillows: action.data
    }
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DATA: return setData(state, action)

        default:
            return state
    }
}

export default productReducer
