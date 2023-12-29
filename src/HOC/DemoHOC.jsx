import React, { Component } from "react";
import HOCModal from "./HOCModal";
import Login from "../pages/Login";
import ClassHOCModal from "./ClassHOCModal";
import Register from "../pages/Register";
const LoginHOCModal = HOCModal("Login-demo", Login);

export default class DemoHOC extends Component {
  state = {
    component: Login,
  };
  render() {
    const StateComponent = ClassHOCModal("title", this.state.component);
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary btn-lg mx-2"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
          onClick={() => {
            this.setState({
              component: Login,
            });
          }}
        >
          Login
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
          onClick={() => {
            this.setState({
              component: Register,
            });
          }}
        >
          Register
        </button>
        <StateComponent />
      </div>
    );
  }
}
