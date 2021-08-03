import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegScreen} />
          <Route exact path="/forgotPass" component={LoginScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
