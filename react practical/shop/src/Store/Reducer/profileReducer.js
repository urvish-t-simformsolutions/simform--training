import * as actionTypes from "../Action/actionType";



const initialState = {
    disabled: false,
    userDetails: {
        details: {
            adLine1: "",
            adLine2: "",
            adLine3: "",
            city: "",
            country: "",
            firstName: "",
            lastName: "",
            phoneNo: "",
            phoneNumber: "",
            pincode: "",
            state: "",
        },
        email: "",
        id: ""
    },
    userId: null,
}

const checkFormDetails = (state, action) => {
    return {
        ...state,
        userDetails: action.userDetails,
        disabled: true
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




        default:
            return state
    }
}

export default profileReducer