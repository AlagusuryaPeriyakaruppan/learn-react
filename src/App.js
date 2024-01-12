import "./App.css";
import { UserProvider } from "./components/UserContext";
import ComponentC from "./components/ComponentC";
import GetAndPost from "./components/GetAndPost";

function App() {
  return (
    <div className="App">
      <GetAndPost />
    </div>
  );
}

export default App;
