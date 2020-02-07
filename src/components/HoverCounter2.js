import React, { Component } from 'react'

class HoverCounter2 extends Component {
   
    render() {
        const {count, incCount} = this.props
        return (
           <h2 onMouseOver={incCount}>Went over {count} times</h2>
        )
    }
}

export default HoverCounter2
