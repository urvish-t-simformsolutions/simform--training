import {Buy_Cake} from './cakeType'

const initialState ={
    numOfCakes:10
}

const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case Buy_Cake: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }
        default: return state
    }
}
 
export default cakeReducer