import * as actionTypes from './actionType'
import axios from "../../axios-data.js"


export const checkFormDetails = (email) => {
    return dispatch => {
        axios.get("/userDetails.json")
            .then(res => {
                Object.keys(res.data).map((item) => {
                    if (email === res.data[item].email) {
                        dispatch(verifyingDetails(res.data[item], email))
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

export const setFormDetails = (details) => {
    console.log("detailset")
    return dispatch => {
        axios.get("/userDetails.json")
            .then(res => {
                // console.log("get data", res.data)
                // console.log(res.data.name);
                if (res.data) {
                    let key = Object.keys(res.data)
                    Object.keys(res.data).map((item, index) => {
                        // console.log("keys", item);
                        key = item
                        if (details.id === res.data[item].id) {
                            axios.put("/userDetails/" + key + "/details.json", details.details)
                                .then(res => {
                                    console.log(res)
                                })
                                .catch(error => {
                                    console.log(error)
                                })
                        }
                    })
                } else {
                    axios.post("/userDetails.json", details)
                        .then(res => {
                            console.log(res)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }
            })
    }
    // axios.post("/userDetails.json", details)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
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