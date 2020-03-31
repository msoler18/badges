import React from 'react'
import './styles/Home.css';
import logoConf from '../images/platziconf-logo.svg'
import homeAstronaut from '../images/astronauts.svg'

class Home extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="Home">
          <div className="Home__wrapper">
            <div className="Home__wrapper__content">
              <img src={logoConf} alt="Logo Conf"/>
              <h1>Print Your Badges</h1>
              <p>The easiest way to managee your conference</p>
            </div>
            <div className="Home__wrapper__img">
              <img src={homeAstronaut} alt=""/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;