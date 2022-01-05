import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="d-flex justify-content-center">Welcome to Home Page</h1>
        <div className="mt-10">
          <NavLink to="/users">
            <button className="btn btn-primary">Users</button>
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Home;
