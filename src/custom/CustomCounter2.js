import React, {useState} from 'react'

function CustomCounter2() {
const [count, setCount] = useState(0);
const increment = () => {
    setCount(prevCount => prevCount + 1);
}

const decrement = () => {
    setCount(prevCount => prevCount -1);
}

const reset = () =>{
    setCount(0)
}
    return (
        <div>
            <h2>count = {count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CustomCounter2
