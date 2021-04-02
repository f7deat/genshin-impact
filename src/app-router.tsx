import React from "react";
import { Route, Switch } from "react-router-dom";
import News from "./components/news";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/">
        <News />
      </Route>
    </Switch>
  );
};

export default AppRouter;
