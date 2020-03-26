import React from 'react';

import './styles/BadgeNew.css';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/badge-header.svg';

class BadgeNew extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt=""logo/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge firstName="Miguel" lastName="Soler" jobTitle="WebDev" twitter="msoler18"/>
            </div>
            <div className="col-6">
              <BadgeForm/>
            </div>
          </div>  
        </div>

      </div>
    );
  }
}

export default BadgeNew;