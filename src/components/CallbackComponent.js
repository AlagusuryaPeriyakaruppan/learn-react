import React, { useCallback, useState } from "react";
import Title from "./Title";
import Button from "./Button";
import CountC from "./CountC";

const CallbackComponent = () => {
  const [age, setAge] = useState(24);
  const [salary, setSalary] = useState(200000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);

  return (
    <div>
      <Title />
      <CountC text="Age" value={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <CountC text="Salary" value={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default CallbackComponent;
