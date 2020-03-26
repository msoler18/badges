import React from 'react';

class BadgeNew extends React.Component{
  render(){
    return (
      <div>
        <h1>New Attendant</h1>
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input className="form-control" type="text" name="FirstName"/>
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeNew;