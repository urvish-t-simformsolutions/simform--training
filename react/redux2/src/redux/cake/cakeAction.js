import {Buy_Cake} from './cakeType'

export const buyCake = (number = 1) =>{
    return {
        type:Buy_Cake,
        payload: number
    }
}