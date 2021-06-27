import "./App.css";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/pages/SearchPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
