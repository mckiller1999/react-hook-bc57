import React, { Component } from "react";

export default class ChildComponent extends Component {
  state = {
    number: 1,
  };
  render() {
    return <div>ChildComponent</div>;
  }
}
