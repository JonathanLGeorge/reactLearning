import {useState} from 'react'

//if initialCount is not passed a value then 0 will be used
function useCounter(initialCount = 0, value = 1) {

    const [count, setCount] = useState(initialCount);
    const increment = () => {
        setCount(prevCount => prevCount + value);
    }
    
    const decrement = () => {
        setCount(prevCount => prevCount -value);
    }
    
    const reset = () =>{
        setCount(initialCount)
    }

    return [count, increment, decrement, reset]
}

export default useCounter
