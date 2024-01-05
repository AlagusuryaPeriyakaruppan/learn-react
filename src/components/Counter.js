import React, { useState } from "react";
import useCount from "./Count";

const Counter = () => {
  const { count, increment, decrement, reset } = useCount(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
