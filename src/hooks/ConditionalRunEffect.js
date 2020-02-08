import React, { Component } from 'react'

class ConditionalRunEffect extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name: ''
        }
    }
    
    componentDidMount(){
        document.title = `clicked ${this.state.count} times`;
    }

    componentWillUpdate(prevProps, prevState){
        
        if(prevState.count !== this.state.count){
            console.log("updating document title")
        }
        document.title = `clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <input 
                    type='text'
                    value={this.state.name} 
                    onChange={e => {
                        this.setState({name: e.target.value})
                    }}/>
                <div>
                <button onClick={() => this.setState({count: this.state.count +1})}>clicked {this.state.count} times</button>
                </div>
            </div>
        )
    }
}

export default ConditionalRunEffect
