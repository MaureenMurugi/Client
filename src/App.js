import {Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar';
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <div>
    <NavBar />
      <Switch>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
        </div>
  );
}

export default App;
