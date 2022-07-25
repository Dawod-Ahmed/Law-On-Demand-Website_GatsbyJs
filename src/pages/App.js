import * as React from "react";

import HomePage from "./components/HomePage";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Redirect exact to="/" />
      </Switch>
    </>
  );
}

export default App;
