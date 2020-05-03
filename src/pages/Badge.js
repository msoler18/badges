import React from 'react'
import './styles/Badge.css'
import confLogo from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import BadgeList from '../components/BadgeList'
import { Link } from 'react-router-dom'
import api from '../api'
import PageLoader from '../components/PageLoader'
import PageError from '../components/PageError'


class Badge extends React.Component{

  state = {
    loading:true,
    error:null,
    data: undefined,
  };

  componentDidMount(){
    this.fetchData();
    setInterval(this.fetchData,5000)
  }


  fetchData = async () => {
    this.setState({loading:true,error:null});
    try {
      const data = await api.badges.list();
      this.setState({loading:false,data:data});
    } catch(error) {
      this.setState({loading:false,error:error})
    }
  }

  render(){

    if(this.state.loading === true){
      return <PageLoader/>;
    }

    if(this.state.error){
      return <PageError error={this.state.error.message}/>
    }

    return (
      <div className="page__temp">
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img 
                className="Badges_conf-logo"
                src={confLogo} 
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Bagde
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <ul className="list-unstyled">
              <BadgeList badges={this.state.data}/>
            </ul>
          </div>
        </div>

      </div>  
    )
  }
}

export default Badge;