import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
import gravatar from '../images/gravatar.jpg';

const container = document.getElementById('test')

class Badge extends React.Component{
  render(){
    return <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo"/>
      </div>

      <div className="Badge__section-name">
        <img className="Badge__avatar" src={gravatar} alt="Avatar"/>
        <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
      </div>

      <div className="Badge__section-info">
        <h3>{this.props.jobTitle}</h3>
        <div>{this.props.twitter}</div>
      </div>

      <div className="Badge__footer">
        #platziconf
      </div>

    </div>;
  }
}

export default Badge;