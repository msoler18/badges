import React from 'react'
import './styles/Footer.css'

class Footer extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="Footer__main">
          <span>Made with love and music by <a href="https://github.com/msoler18">@msoler18</a></span>
        </div>
      </React.Fragment>
    )
  }
}

export default Footer;