import React, { Component } from 'react'

class ClassClicked extends Component {
    clickHandler(){
        console.log('classbutton clicked');
    }


    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>ckick me class</button>
            </div>
        )
    }
}

export default ClassClicked
