import * as actionTypes from "../Action/actionType";



const initialState = {
    loading: false,
    disabled: false,
    userDetails: null,
    userId: null,
}

const newUser = (state, action) => {
    return {
        ...state,
        // userDetails: null,
        //  {
        //     details: {
        //         adLine1: "",
        //         adLine2: "",
        //         adLine3: "",
        //         city: "",
        //         country: "",
        //         firstName: "",
        //         lastName: "",
        //         phoneNo: "",
        //         pincode: "",
        //         state: "",
        //     },
        //     email: "",
        //     id: ""
        // },
        loading: false
    }
}
const clearOnLogout = (state, action) => {
    return {
        ...state,
        userDetails: null
    }
}

const checkDetailStart = (state, action) => {

    return {
        ...state,
        loading: true
    }
}

const checkFormDetails = (state, action) => {

    return {
        ...state,
        userDetails: action.userDetails,
        // disabled: true,
        loading: false
    }
}
const updateDetailStart = (state, action) => {
    console.log("start")
    return {
        ...state,
        disabled: false
    }
}
const updateFormDetails = (state, action) => {
    return {
        ...state
    }
}

const updateDetailEnd = (state, action) => {
    return {
        state,
        // disabled: true
    }
}
const setFormDetails = (state, action) => {
    console.log("save")
    return {
        ...state,
        userId: action.id,
        userDetails: action.formDetails,
        disabled: true
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_FORM_DETAILS: return updateFormDetails(state, action)
        case actionTypes.SET_FORM_DETAILS: return setFormDetails(state, action)
        case actionTypes.UPDATE_DETAIL_START: return updateDetailStart(state, action)
        case actionTypes.CHECK_FORM_DETAILS: return checkFormDetails(state, action)
        case actionTypes.UPDATE_DETAIL_END: return updateDetailEnd(state, action)
        case actionTypes.CHECK_DETAILS_START: return checkDetailStart(state, action)
        case actionTypes.NEW_USER: return newUser(state, action)
        case actionTypes.CLEAR_ON_LOGOUT: return clearOnLogout(state, action)





        default:
            return state
    }
}

export default profileReducer