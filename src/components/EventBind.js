import React, {Component} from 'react';

class EventBind extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: 'hello'
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        if(this.state.message === 'hello'){
            this.setState({
                message: 'goodbye'
            })
        } else{
            this.setState({
                message: 'hello'
            })
        }
    }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Event</button>
            </div>
        )
    }
}

export default EventBind
//binding in render method 
// <button onClick={this.clickHandler.bind(this)}>click</button>
//re renders offten though...

//arrow funtion in render method 
//<button onClick={()=> this.clickHandler()}</button>
//also has preformance issues... re renders....

//offical use case
//in constructor add this...
//this.clickHandler = this.clickHandler.bind(this)
//use in render method
//<button onClick={this.clickHandler}>click</button>

//experimental option
// clickhandler = () => {
//    this.setState({ 
//        message: 'goodbye'
//    })
//}