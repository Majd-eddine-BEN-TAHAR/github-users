import React from "react";
import { Dashboard, Error } from "./pages";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="*" component={Error} />
      </Switch>
    </main>
  );
}

export default App;
