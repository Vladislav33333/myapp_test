import "./styles/App.css";
import "./styles/index.css"
import { BrowserRouter as Router } from "react-router-dom";
import { RoutesApp } from "./routes/RoutesApp"
import Theme from './components/ThemeMode/providers/Theme'


const App = () => {

  return (
    <Theme>
      <Router>
        <div className='App' style={{ color: 'var(--text-primary)' }} >
          <div className="App-container">
            <RoutesApp />
          </div>
        </div>
      </Router >
    </Theme>
  );
};
export default App;