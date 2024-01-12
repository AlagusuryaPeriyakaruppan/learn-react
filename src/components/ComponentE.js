import React from "react";
import { UserConsumer } from "./UserContext";

const ComponentE = () => {
  return (
    <div>
      <UserConsumer>
        {(name) => {
          return <h1>Hello {name}</h1>;
        }}
      </UserConsumer>
    </div>
  );
};

export default ComponentE;
