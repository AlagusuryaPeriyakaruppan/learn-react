import React from "react";

const Pure = ({ age }) => {
  console.log("In Pure");
  return <div>age</div>;
};

//Pure component changes only if state or props of its own changes
export default React.memo(Pure);
