import React from "react";
import Content from "./Content";

const HOC = () => {
  return () => (
    <div>
      <h1>Navigation</h1>
      <Content />
    </div>
  );
};

export default HOC;
