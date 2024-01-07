import { useEffect, useState } from "react";
import "./App.css";
import CallbackComponent from "./components/CallbackComponent";
import Reducer from "./components/Reducer";
import State from "./components/State";
import Class from "./components/Class";

function App() {
  // const Container = HOC(Content);

  // useEffect(() => {
  //   setInterval(() => {
  //     setId(() => id + 1);
  //   }, 1000);
  // });

  return (
    <div className="App">
      {/* <ClickCounter name="Surya" /> */}
      {/* <Counter /> */}
      {/* <Parent id={id} age={age} /> */}
      <Class />
    </div>
  );
}

export default App;
