import React from "react";
import Pure from "./Pure";

const Parent = ({ id, age }) => {
  console.log("IN PARENT");
  return (
    <div>
      <h1>{id}</h1>
      <Pure age={age} />
    </div>
  );
};

export default Parent;
