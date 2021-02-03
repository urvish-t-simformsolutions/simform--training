import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return(
        <div>
            <h5>****************Using hooks**************</h5>
            <h2>No. of Cakes: {numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy  Cakes</button>
        </div>
)
}

export default HooksCakeContainer