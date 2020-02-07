import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        //callback ref
        this.cbRef = null;
        //next we create a method that will assign dom element to the ref wecreated
        this.setCbRef = element => {
            this.cbRef = element;
        }
    }
    
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus();
        }


        //this will put the cursor in the input box on page load
        /*
        this.inputRef.current.focus();
        console.log(this.inputRef);
        */

    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Clicked</button>
            </div>
        )
    }
}

export default RefsDemo
//create new property this.inputRef
//attach by using ref={this.inputRef}
//call focus method on the input element... what does this.inputRef hold?

//look at didmount ///
