import React,{useState, useEffect} from 'react'

function HookMouseEffect1x() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e =>{
        console.log("mouse event")
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        console.log('useEffevt called');
        window.addEventListener('mousemove', logMousePosition);

        //clean up code in hooks
        //same as componentWillUnmount() 
        return () => {
            console.log("component unmounted");
            window.removeEventListener('mousemove', logMousePosition);
        }

    }, []) //no reason to rerender

    return (
        <div>
            Hooks X {x} Y - {y}
        </div>
    )
}

export default HookMouseEffect1x
//added clean up code