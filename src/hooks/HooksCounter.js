import React, {useState} from 'react'

function HooksCounter() {
    const [count, setCount] = useState(0);
    
    function plusOne(){
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={plusOne}>
                Hooks count: {count}
            </button>
        </div>
    )
}

export default HooksCounter
// could also have inline arrow function inplace of plusOne
// () => setCount(count + 1)


