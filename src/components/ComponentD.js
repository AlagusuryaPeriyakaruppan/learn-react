import React, { Component } from "react";
import UserContext from "./UserContext";
import ComponentE from "./ComponentE";

export class ComponentD extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        ComponentD-{this.context}
        <ComponentE />
      </div>
    );
  }
}

//ComponentD.contextType = UserContext;

export default ComponentD;
