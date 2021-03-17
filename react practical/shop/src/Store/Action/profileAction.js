import * as actionTypes from './actionType'
import axios from "../../axios-data.js"


export const checkFormDetails = (email) => {
    return dispatch => {
        dispatch({ type: actionTypes.CHECK_DETAILS_START })
        axios.get("/userDetails.json")
            .then(res => {
                Object.keys(res.data).map((item) => {
                    if (email === res.data[item].email) {
                        dispatch(verifyingDetails(res.data[item], email))
                    }
                    else {
                        dispatch({ type: actionTypes.NEW_USER })
                    }
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const verifyingDetails = (userData, email) => {
    return {
        type: actionTypes.CHECK_FORM_DETAILS,
        userDetails: userData
    }
}

export const showFormDetails = () => {
    return dispatch => {
        axios.get("/userDetails.json")
            .then(res => {
                console.log("user", res.data)
                dispatch({ type: actionTypes.GET_FORM_DETAILS })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const clearOnLogout = () => {
    return {
        type: actionTypes.CLEAR_ON_LOGOUT
    }
}

export const setFormDetails = (details) => {    //console.log("detailset")
    return dispatch => {
        axios.get("/userDetails.json")
            .then(res => {                // console.log("get data", res.data)                //console.log(res.data.name);
                if (res.data) {
                    let key = Object.keys(res.data)
                    let count = 0
                    Object.keys(res.data).map((item, index) => {        //   console.log("keys", item);
                        key = item                       // console.log(details.id, res.data[item].id);
                        if (details.id === res.data[item].id) {                          //  console.log("put");
                            axios.put("/userDetails/" + key + "/details.json", details.details)
                            dispatch({ type: actionTypes.CHECK_FORM_DETAILS })
                            count = 0                          //  console.log("count in put", count)
                        } else {
                            count = count + 1                          //  console.log("count", count)
                        }
                    })
                    if (count !== 0) {
                        count = 0                       // console.log("post", count);
                        axios.post("/userDetails.json", details)
                        dispatch({ type: actionTypes.CHECK_FORM_DETAILS })
                    }
                } else {
                    console.log("post");
                    axios.post("/userDetails.json", details)
                    dispatch({ type: actionTypes.CHECK_FORM_DETAILS })
                }
            })
    }
}

// export const updateFormDetails = (details) => {
//     return dispatch => {
//         dispatch({ type: actionTypes.UPDATE_DETAIL_START })
//         axios.get("/userDetails.json")
//             .then(res => {
//                 // console.log("get data", res.data)
//                 // console.log(res.data.name);
//                 let key = Object.keys(res.data)
//                 Object.keys(res.data).map((item, index) => {
//                     // console.log("keys", item);
//                     key = item
//                     if (details.id === res.data[item].id) {

//                         axios.put("/userDetails/" + key + "/details.json", details.details)
//                         // .then(res => {
//                         //     console.log(res.data)
//                         // })
//                         // .catch(error => {
//                         //     console.log(error)
//                         // })
//                     } else {
//                         axios.post("/userDetails.json", details)
//                     }
//                 })
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//         //   dispatch({type:actionTypes.UPDATE_DETAIL_END})
//     }
// }