import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AppRoutes = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </React.Fragment>
  );
};
export default AppRoutes;
