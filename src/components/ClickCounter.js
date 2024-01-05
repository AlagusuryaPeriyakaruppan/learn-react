import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1>Clicked {count} times</h1>
        <button onClick={incrementCount}>Add 5</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5);
