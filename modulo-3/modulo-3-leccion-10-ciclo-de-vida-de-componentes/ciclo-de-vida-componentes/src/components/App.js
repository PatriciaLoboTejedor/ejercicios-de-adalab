import "../stylesheets/App.scss";
import Counter from "./Counter";
import Relax from "./Relax";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Counter</Link>
            </li>
            <li>
              <Link to="/relax">Relax</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Counter} />
          <Route path="/relax" component={Relax} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
