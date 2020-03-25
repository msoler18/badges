import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
import gravatar from '../images/gravatar.jpg';

class Badge extends React.Component{
  render(){
    return <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo"/>
      </div>

      <div className="Badge__section-name">
        <img className="Badge__avatar" src={gravatar} alt="Avatar"/>
        <h1>Miguel <br/> Soler</h1>
      </div>

      <div className="Badge__section-info">
        <p>Web developer</p>
        <p>@msoler18</p>
      </div>

      <div className="Badge__footer">
        #platziconf
      </div>

    </div>;
  }
}

export default Badge;