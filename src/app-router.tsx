import { Route, Switch } from "react-router-dom";
import CharacterDetails from "./components/character-details";
import Characters from "./components/characters";
import News from "./components/news";
import NewsDetails from "./components/news-details";
import Weapons from "./components/weapons";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/news/details/:id">
        <NewsDetails />
      </Route>
      <Route path="/characters/:id">
        <CharacterDetails />
      </Route>
      <Route exact path="/characters">
        <Characters />
      </Route>
      <Route exact path="/weapons">
        <Weapons />
      </Route>
      <Route path="/">
        <News />
      </Route>
    </Switch>
  );
};

export default AppRouter;
