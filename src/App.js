import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import ControlPanel from "./controlpanel/ControlPanel";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/new_test/to_do">
          <ControlPanel/>
        </Route>
        <Route path="/new_test">
          <Redirect to={'/new_test/to_do'}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
