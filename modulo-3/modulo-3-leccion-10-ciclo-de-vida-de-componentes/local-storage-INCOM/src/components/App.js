import "../stylesheets/App.scss";
import { Link, Route, Switch } from "react-router-dom";
import InputTextFuntional from "./InputTextFuntional";
import InputTextClass from "./InputTextClass";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/class">Input Componente Clase</Link>
            </li>
            <li>
              <Link to="/funcional">Input Componente Funcional</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/class" component={InputTextClass} />
          <Route path="/funcional" component={InputTextFuntional} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
