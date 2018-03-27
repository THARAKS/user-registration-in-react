import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
  render(){
    console.log(this)
    // let isActive = this.context.router.isActive(this.props.to, true);
    // let className = isActive ? "active" : "";

    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">ChatBot</a>
            <a data-activates="main-menu" className="button-collapse show-on-large">
              <i className="fa fa-bars"></i>
              </a>
            <ul className="right hide-on-small-only">
              <li ><Link to="/"><i className="fa fa-sign-in"></i> Login</Link></li>   
              <li ><Link to="/RegisterUser"><i className="fa fa-user-plus"></i> Register</Link></li>         
      
            </ul>
            <ul className="side-nav" id="main-menu">
            <li><Link to="/About"><i className="fa fa-users"></i> About</Link></li>  
            <li><Link to="/Sucess"><i className="fa fa-plus"></i> Sucess</Link></li>  
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}


export default Navbar;