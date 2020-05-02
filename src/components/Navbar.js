import React from 'react';
import logo from '../images/badge-header.svg';
import './styles/Navbar.css';
import { Link } from 'react-router-dom'

class Navbar extends React.Component{
  render(){
    return(
      <div className="Navbar">
        <div className="container-fluid">
          <Link to="/" className="Navbar__brand" >
            <img className="Navbar__brand__logo" src={logo} alt="Platzi logo"/>
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;