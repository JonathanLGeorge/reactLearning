import React, {useState, useEffect} from 'react'

function EffectRender() {
    const [count, setcount] = useState(0);
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `you clicked ${count} times`;
    }, [count])

    return (
        <div>
            <input type="text" onChange={e => setName(e.target.value)}></input>
            <button onClick={()=> setcount(count +1)}>clicked {count} times</button>
        </div>
    )
}

export default EffectRender
/**
 * useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `you clicked ${count} times`;
    }, [count])
 * 
 * as you can see, there is a ,[] added att he end of the useEffect...
 * what we put inside is what we wnt to use.
 * 
 */