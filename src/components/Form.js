import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             comments: '',
             topic: 'react'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault();
    }

    render() {
        const{user, comment, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName</label> 
                    <input 
                    type="text" 
                    value={this.state.userName}
                    onChange={this.handleUsernameChange}/>             
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>
        )
    }
}

export default Form
