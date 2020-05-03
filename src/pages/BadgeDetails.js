import React from 'react'
import { Link } from 'react-router-dom'
import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

const BadgeDetails = (props) => {
  const badge = props.badge;

  return(
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Platzi Conf Logo"/>
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>{badge.firstName} {badge.lastName}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container Badge__content">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
            />
          </div>
          <div className="col-6">
            <h2>Actions</h2>
            <div>
              <div className="mb-4">
                <Link className="btn btn-primary" to={`/badges/${badge.id}/edit`}>Edit</Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                <DeleteBadgeModal 
                  isOpen={props.modalIsOpen} 
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>  

    </React.Fragment>
  )
}

export default BadgeDetails;