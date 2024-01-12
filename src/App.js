import "./App.css";
import { UserProvider } from "./components/UserContext";
import ComponentC from "./components/ComponentC";

function App() {
  return (
    <div className="App">
      <UserProvider value="Surya">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
