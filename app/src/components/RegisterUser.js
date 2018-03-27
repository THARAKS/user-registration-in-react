import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link} from 'react-router-dom';
import css from '../css/style.css';

export default class RegisterUser extends Component {
  constructor(props) {
    super();

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

  handleChange(event){
       this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.history.push('/DashBoard')
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("password", this.state.password);

  }

  render() {
    return (

      <div className="Login">
        <form onSubmit={this.handleSubmit}>
        <div className="form-group  card-panel #ff1744 red accent-3 center" >Please Register to Continue</div>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              className="custum"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              className="custum"
            />
          </FormGroup>
          <button className="btn waves-effect #ff1744 red accent-3"
          disabled={!this.validateForm()}
         type="submit" name="action">Register
        </button>
        </form>
      </div>
    );
  }
}