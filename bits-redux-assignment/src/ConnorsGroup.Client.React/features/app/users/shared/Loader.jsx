import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

export default class Loader extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="primary" size="bg" />
      </div>
    );
  }
}
