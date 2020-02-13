import React, {useState} from 'react'
import useCounter from './useCounter'

function CustomCounter() {
    const [count, increment, decrement, reset] = useCounter(50);
    return (
        <div>
            <h2>count = {count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CustomCounter
