import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("button clicked yo");
    }

    return (
        <div>
            <button onClick={clickHandler}>click</button>
        </div>
    )
}

export default FunctionClick
