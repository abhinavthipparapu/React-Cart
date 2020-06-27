import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            name : "",
            password :""
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = () =>{
        const {name, password} = this.state

        let payload = {
            name,
            password
        }

        const {app} = this.props
        console.log(app)
        app.userVerification(payload)
    }


    render() {
        // console.log(this.props.app)
        const {app} = this.props
        if(app.isAuthentication()){
            return(
                <Redirect to = "/" />
            )
        }
        return (
            <div>
                <input name="name" value={this.state.name} onChange={this.handleChange} type="text" placeholder="enter your name"/>
                <br/>
                <input name="password" value={this.state.password} onChange={this.handleChange} type="text" placeholder="enter your password"/>
                <br/>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}

export default Login