import React from 'react';
import logo from '../images/badge-header.svg';
import './styles/Navbar.css';

class Navbar extends React.Component{
  render(){
    return(
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand__logo" src={logo} alt="Platzi logo"/>
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;