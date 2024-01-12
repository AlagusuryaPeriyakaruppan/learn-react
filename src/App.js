import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import Person from "./components/Person";
import IncreaseCount from "./components/IncreaseCount";
import Fallback from "./components/Fallback";

function App() {
  const person = {
    firstName: "Alagu",
    lastName: "surya",
  };

  const errorHandler = (error, errorInfo) => {
    console.log("Logging:", error, errorInfo);
  };

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Person person={person} />
        <IncreaseCount />
      </ErrorBoundary>
    </div>
  );
}

export default App;
