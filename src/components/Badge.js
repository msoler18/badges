import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component{
  render(){
    return <div>
      <div>
        <img src={confLogo} alt="Logo"/>
      </div>

      <div>
        <img src="" alt="Avatar"/>
        <h1>Miguel <br/> Soler</h1>
      </div>

      <div>
        <p>Web developer</p>
        <p>@msoler18</p>
      </div>

      <div>
        #platziconf
      </div>

    </div>;
  }
}

export default Badge;