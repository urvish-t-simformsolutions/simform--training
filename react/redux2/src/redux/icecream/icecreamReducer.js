import {Buy_Icecream} from './icecreamType'

const initialState ={
    numOfIcecream:20
}

const IcecreamReducer=(state=initialState,action)=>{
    switch(action.type){
        case Buy_Icecream: return {
            ...state,
            numOfIcecream: state.numOfIcecream - 1
        }
        default: return state
    }
}
 
export default IcecreamReducer