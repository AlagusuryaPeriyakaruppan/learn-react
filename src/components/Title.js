import React from "react";

const Title = () => {
  console.log("Rendering Title");
  return <h1> Usecallback Function </h1>;
};

export default React.memo(Title);
