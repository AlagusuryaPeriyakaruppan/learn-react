import React, { useMemo, useState } from "react";

const CounterOne = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCountByOne = () => {
    setCount1(count1 + 1);
  };
  const incrementCountByTwo = () => {
    setCount2(count2 + 1);
  };

  //useMemo is used to memoize the result of a computation so that it is only recomputed when its dependencies change.
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) {
      i++;
    }
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <div>
        <button onClick={incrementCountByOne}>Increment 1 - {count1}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementCountByTwo}>Increment 2 - {count2}</button>
      </div>
    </div>
  );
};

export default CounterOne;
