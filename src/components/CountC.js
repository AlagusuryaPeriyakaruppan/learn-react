import React from "react";

const CountC = ({ text, value }) => {
  return (
    <div>
      {text}- {value}
    </div>
  );
};

export default React.memo(CountC);
