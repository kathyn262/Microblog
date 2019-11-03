import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBox extends React.Component {
  render() {
    return (
        <div className="jumbotron">
        <h1>Microblog</h1>
        <h3>Get in the Rithm of blogging!</h3>

        <div>
          <NavLink className="nav-item" style={{ marginRight: "10px" }}
            exact to="/">Home</NavLink>
          <NavLink className="nav-item" exact to="/new">Add a New Post</NavLink>
        </div>
        </div>
    )
  }
}

export default NavBox;