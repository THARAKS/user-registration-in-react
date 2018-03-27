import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var email = localStorage.getItem("email");
        var pwd = localStorage.getItem("password");
        if ((email === this.state.email) && (pwd === this.state.password)) {
            console.log("user is alredy registered")
            this.props.history.push('/DashBoard')

        }
        else {
            this.props.history.push('/')
            alert("User does not exist Please Register to login")

        }
    }


    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                 <div className="ownmar form-group card-panel #ff1744 red accent-3 center" >Please Login to Continue</div>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            className="custum"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            className="custum"
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                 <button 
                    className="btn waves-effect #ff1744 red accent-3"
                    disabled={!this.validateForm()}
                    type="submit" name="action">Login
                </button>
                </form>
            </div>
        );
    }
}
export default Login;