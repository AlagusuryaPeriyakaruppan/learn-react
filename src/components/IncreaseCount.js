import React, { useState } from "react";

const MAX_COUNT = 3;

const IncreaseCount = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    try {
      if (count === MAX_COUNT) {
        throw new Error("MAX COUNT EXCEEDED");
      } else {
        setCount((prevCount) => prevCount + 1);
      }
    } catch (error) {
      console.error("Error in handleClick:", error);
    }
  };

  return <button onClick={handleClick}>Increased Count to - {count}</button>;
};

export default IncreaseCount;
