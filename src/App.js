import { useEffect, useState } from "react";
import "./App.css";
import CallbackComponent from "./components/CallbackComponent";
import Reducer from "./components/Reducer";

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
      <CallbackComponent />
      <Reducer />
    </div>
  );
}

export default App;
