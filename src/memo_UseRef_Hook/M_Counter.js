import React, {useState, useMemo} from 'react'

function M_Counter() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const inc1 = () => {
        setCounter1(counter1 + 1);
    }

    const inc2 = () => {
        setCounter2(counter2 + 1);
    }

    //this is for performance optimization
    //we do this to cache the rersult of an invoked function 
    const isEven = useMemo(() => {
        let i = 0;
        while(i < 2000000000){
            i++;
        }
        return counter1 % 2 === 0
    }, [counter1])

    return (
        <div>
            <div>
                <button onClick={inc1}>Count One: {counter1}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={inc2}>Count two: {counter2}</button>
            </div>
        </div>
    )
}

export default M_Counter
//usecallback used to cache a function instance 