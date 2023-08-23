import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from './pages/Home'
import Visitas from './pages/crearVisita'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/crearVisita">
              <Visitas/>
              </Route>
            </Switch>

          </div>
        </Router>

      </div>
    </div>
  );
}

export default App;
