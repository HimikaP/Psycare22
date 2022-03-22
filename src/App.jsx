import './App.css'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import Parent from "./Pages/Parent";
import Who from "./Pages/Who";
import Teacher from "./Pages/Teacher";
const App = () => {
  return <div>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Who />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/parent" exact>
          <Parent />
        </Route>
        <Route path="/teacher" exact>
          <Teacher />
        </Route>
        <Route path="/who" exact>
          <Who />
        </Route>
        <Redirect to="/" />
      </Switch>

    </Router>
  </div>;
};

export default App;