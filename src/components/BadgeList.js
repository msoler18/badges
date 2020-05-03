import React from 'react'
import './styles/BadgeList.css'
import Gravatar from './Gravatar'
import { Link } from 'react-router-dom'

class BadgeSingle extends React.Component{
  render(){
    return(
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.data.email}
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

    if(this.props.badges.length == 0){
      return(
        <div>
          <h3>No badges were found</h3>
          <Link to="/badges/new" class="btn btn-primary">
            Create new badge
          </Link>
        </div>
      )
    }

    return(
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge)=>{
            return(
              <li key={badge.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                  <BadgeSingle data={badge}/>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>  
    )
  }
}


export default BadgeList;