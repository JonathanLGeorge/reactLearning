import React, {useEffect, useRef} from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    useEffect(() =>{
    //focus the input element
        inputRef.current.Focus()
    }, [])
    return (
        <div>
            <input ref={inputRef} type="text"></input>
        </div>
    )
}

export default FocusInput
