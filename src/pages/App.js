import * as React from "react";

import { HomePage } from "./components/components";
// import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <HomePage />
      {/* <Switch>
      <Route exact path="/home" component={HomePage} />
      <Redirect exact to="/home" />
      </Switch> */}
    </>
  );
}

export default App;
