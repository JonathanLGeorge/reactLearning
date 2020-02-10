import React, {useState, useEffect} from 'react'

function UpCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
        //could also do setCount(prevCount => prevCount +1) and leave out the [count] in use effects
    }
/*
    function doSomething(){
        console.log(someProp);
    }
*/
    useEffect(() => {
        function doSomething(){
            console.log(someProp);
        }

        doSomething();
        //its very easy to forget someProp is a dependency, its used in doSomething 
        //when we need to call a function in useEffect, go ahead and define the function 
        //in useEffect... this way when we read through the effecct we can easily see a prop that has to be specified as a dependetcy 
         // dependency list is the array at the end, so we would add [someProp] 
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [count, someProp])
    return (
        <div>
            {count}
        </div>
    )
}

export default UpCounter
//we can have muliple useEffect() calls
//just do one for each differnt use