import React, {useState} from 'react'

function HookCounter2() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
    const times5 = () => {
        for (let index = 0; index < 5; index++) {
            setCount(count => count +1)
            
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={()=> setCount(initialCount)}>Reset</button>
            <button onClick={()=> setCount(junk => junk +1)}>
                + Increment +
            </button>
            <button onClick={()=> setCount(junk => junk -1)}>
                - Decriment -
            </button>
            <button onClick={times5}>*5</button>
        </div>
    )
}

export default HookCounter2
//will set back to zero
//()=> setCount(initialCount)