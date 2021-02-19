import * as actionTypes from './actionTypes'
//import axios from '../../Axios-Orders'

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    }
}

export const initIngredients = () => {
    return {
        type: actionTypes.INIT_INGREDIENTS
    }
    // return dispatch => {
    //     axios.get('https://burger-db-5f571-default-rtdb.firebaseio.com/ingredients.json')
    //         .then(response => {
    //             //this.setState({ ingredients: response.data })
    //             dispatch(setIngredients(response.data))
    //         })
    //         .catch(error => {
    //             // this.setState({ error: true })
    //             dispatch(fetchIngredientsFailed())
    //         })
    // }
}