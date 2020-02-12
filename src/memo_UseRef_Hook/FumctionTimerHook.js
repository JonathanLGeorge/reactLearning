import React, {useState, useRef, useEffect} from 'react'

function FumctionTimerHook() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef()
    
    useEffect(() => {
        intervalRef.current = setInterval(() =>{
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        };
    }, [])
    
    return (
        <div>
            Hook timer - {timer}
            <button onClick={()=> clearInterval(intervalRef.current)}>clear hook timer</button>
        </div>
    )
}

export default FumctionTimerHook
