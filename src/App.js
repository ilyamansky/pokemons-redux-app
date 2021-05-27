import "./App.css";
import PokemonList from "./components/PokemonList";
import SearchResult from "./components/Search/SearchResult";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import PokemonTypesResults from "./components/PokemonTypes/PokemonTypesResults";

function App() {
  return (
    <div className="App">
      <h3>Pokemon Application</h3>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/search">
            <SearchResult />
          </Route>
          <Route path="/types">
            <PokemonTypesResults />
          </Route>
          <Route path="/">
            <PokemonList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
