import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard"
import Signup from "../pages/Signup";
import { useLocation } from "react-router";

const AppRoutes = (props) => {

  const {pathname} = useLocation();
  console.log(location);
  let  Comp = <Login />; 

  switch (pathname) {
    case '/dashboard':{
      Comp = <Dashboard />
      break;
    }
    case '/signup':{
      Comp = <Signup />
      break;
    }
    case '/login':

    default:
      break;
  }
  return (
    <React.Fragment>
      {Comp}  
    </React.Fragment>
  );
};
export default AppRoutes;
