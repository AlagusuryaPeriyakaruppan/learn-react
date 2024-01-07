import React, { useState } from "react";

//UseState hook takes an initialValue and returns an array that contains current state value and a function to update the current state
//Only call hooks at the top level that is within Functional components and not within Javascript Functions and not inside nested functions,conditions and for loops
const State = () => {
  const [count, setCount] = useState(1);

  return <div>{count}</div>;
};

export default State;
