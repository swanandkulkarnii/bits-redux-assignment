import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./ConnorsGroup.Client.React/features/app/users/components/Home";
import UsersList from "./ConnorsGroup.Client.React/features/app/users/components/UsersList";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<UsersList />} exact></Route>
      </Routes>
    );
  }
}
