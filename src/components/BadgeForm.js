import React from 'react';

class BadgeNew extends React.Component{

  handleChange = e => {
    console.log({value:e.target.value})
  }

  handleClick = e => {
    console.log("button was clicked")
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submited")
  }

  render(){ 
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="FirstName"/>
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeNew;