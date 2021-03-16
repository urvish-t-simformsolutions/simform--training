import * as actionTypes from './actionType'
import axios from "../../axios-data.js"

export const setData = (search, sortBy) => {
    return dispatch => {
        axios.get("/pillows.json")
            .then(res => {
                // dispatch(assignData(res.data))
                if (search === '') {
                    if (sortBy === 'High to Low') {
                        const sorted = res.data.sort((a, b) => b.price - a.price)
                        dispatch(assignData(JSON.parse(JSON.stringify(sorted))))
                    }
                    else if (sortBy === 'Low to High') {
                        const sorted = res.data.sort((a, b) => a.price - b.price)
                        dispatch(assignData(JSON.parse(JSON.stringify(sorted))))
                    }
                    else if (sortBy === '') {
                        const sorted = res.data.sort((a, b) => a.id - b.id)
                        dispatch(assignData(JSON.parse(JSON.stringify(sorted))))
                    }
                }
                else {
                    const newTerm = res.data.filter((item) => item.type.toLowerCase().includes(search.toLowerCase()))
                    if (sortBy === 'High to Low') {
                        const sorted = newTerm.sort((a, b) => b.price - a.price)
                        dispatch(assignData(JSON.parse(JSON.stringify(sorted))))
                    }
                    else if (sortBy === 'Low to High') {
                        const sorted = newTerm.sort((a, b) => a.price - b.price)
                        dispatch(assignData(JSON.parse(JSON.stringify(sorted))))
                    }
                    else if (sortBy === '') {
                        const sorted = newTerm.sort((a, b) => a.id - b.id)
                        dispatch(assignData(JSON.parse(JSON.stringify(sorted))))
                    }
                }

            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const assignData = (data) => {
    return {
        type: actionTypes.SET_DATA,
        data
    }
}
