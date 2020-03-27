import React from 'react'
import './styles/BadgeList.css'

class BadgeSingle extends React.Component{
  render(){
    return(
      <div className="BadgesListItem">
        <img 
          className="BadgesListItem__avatar"
          src={this.props.data.avatarUrl} 
          alt={this.props.data.firstName}
        />
        <div>
          <strong>
            {this.props.data.firstName}
            {this.props.data.lastName}
          </strong>
          <br />@{this.props.data.twitter}
          <br />{this.props.jobTitle}
        </div>
      </div>
    )
  }
}


class BadgeList extends React.Component{
  render(){
    return(
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge)=>{
            return(
              <li key={badge.id}>
                <BadgeSingle data={badge}/>
              </li>
            )
          })}
        </ul>
      </div>  
    )
  }
}


export default BadgeList;