import React, { useReducer } from 'react'

const initialState = 0;


//action  is instrction to reducer function,//state transition
const reducer = (currentState, action) => {
    switch(action){
        case '+':
            return currentState + 1;
        case '-':
            return currentState - 1;
        case 're':
            return initialState;
        default:
            return currentState;
    }
    //returns a newState;
}

function Counter1_useReducer() {
    const [count, dispatch ] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);

    return (
        <div>
            <div>count: {count}</div>
            <button onClick={() => dispatch('+')}>+</button>
            <button onClick={() => dispatch('-')}>-</button>
            <button onClick={() => dispatch('re')}>re</button>

            <div>count2: {count2}</div>
            <button onClick={() => dispatch2('+')}>+</button>
            <button onClick={() => dispatch2('-')}>-</button>
            <button onClick={() => dispatch2('re')}>re</button>
        </div>
    )
}

export default Counter1_useReducer

/**
 * [01,02,03,04]     
 * [05,06,07,08]
 * [09,10,11,12]
 * [13,14,15,16]
 */

 //...05->01->02->03->04->08->12->16->15->14->13->09->05->01...
 //...10->06->07->11->10->06...

 