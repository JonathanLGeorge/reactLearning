import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0, 
    secondCounter: 10

};


//action  is instrction to reducer function,//state transition
const reducer = (currentState, action) => {
    switch(action.type){
        case '+':
            return {... initialState, firstCounter: initialState.firstCounter + action.value}
        case '-':
            return {... initialState, firstCounter: initialState.firstCounter - action.value}
        case 're':
            return initialState;
        case '+2':
            return {... initialState, secondCounter: initialState.secondCounter + action.value}
        case '-2':
            return {... initialState, secondCounter: initialState.secondCounter - action.value}
        default:
            return currentState;
    }
    //returns a newState;
}

function Counter2Reducer() {
    const [count, dispatch ] = useReducer(reducer, initialState)

    return (
        <div>
            <div>1stcount: {count.firstCounter}</div>
            <div>2ndcount: {count.secondCounter}</div>
            <button onClick={() => dispatch({type: '+', value: 1})}>+</button>
            <button onClick={() => dispatch({type: '-', value: 1})}>-</button>
            <button onClick={() => dispatch({type: '+', value: 5})}>+5</button>
            <button onClick={() => dispatch({type: '-', value: 5})}>-5</button>
            <button onClick={() => dispatch({type: 're'})}>re</button>
            <div>
                <button onClick={() => dispatch({type: '+2', value: 1})}>B(2)+1</button>
                <button onClick={() => dispatch({type: '-2', value: 1})}>B(2)-1</button>
            </div>
        </div>
    )
}

export default Counter2Reducer