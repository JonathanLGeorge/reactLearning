import React, { Component } from 'react'

class Counter2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    incCount = () => {
        this.setState(prevState => {
            return {count: prevState.count +1}
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incCount)}
            </div>
        )
    }
}

export default Counter2
/**
 *  the render prop patern 
 * in app comp we encounter counter component
 * in counter component we have count state and incriment count method
 * the counter component does render anything on its own, it will render whatever is passed 
 *  passeed as render prop, it passed count state and inc method
 *      what is render prop? it is clickcounter2 component
 *  the count state and incCpunter method from Couter component are passed as props to the 
 * clickCounter2 component
 * clickCounter2 uses the passed in props render the actual UI
 * 
 * when you click on the button... counter component is doinf the work?
 * 
 *  
 * 
 * 
 * 
 * 
 * 
 */