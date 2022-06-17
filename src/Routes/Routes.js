import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../Home";
import AddUser from "../AddUser";
import UpdateUser from "../UpdateUser";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/addusers" component={AddUser} />
        <Route path="/updateuser" component={UpdateUser} />

        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
