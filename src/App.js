import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/layout/Header";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
