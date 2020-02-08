import React, {useState} from 'react'
import HookMouseEffect1x from './HookMouseEffect1x'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>toggle display</button>
            {display && <HookMouseEffect1x/>}
        </div>
    )
}

export default MouseContainer
