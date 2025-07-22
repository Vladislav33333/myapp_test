import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutesApp } from "./routes/RoutesApp"

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App-container">
          <RoutesApp />
        </div>
      </div>
    </Router >
  );
};
export default App;