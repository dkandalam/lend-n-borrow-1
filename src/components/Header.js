import React from "react";
//import { useHistory } from "react-router-dom";
import {ROUTE_LOGIN, ROUTE_SIGNUP} from "../routes/RoutesConstants";

const Header = (props) => {

  const {onlyBanner=false} = props;
  
  //const history = useHistory();
  
  return (
    <div className="mt-4 mx-2 flex place-content-between">
      <div className=" mx-2 p-1 font-medium text-3xl">Lend & Borrow</div>
      {
        !onlyBanner &&
        <div className=" flex mx-2 my-1">
        <button
          className="mx-2 text-green-400 light"
          onClick={() => {
            history.push(ROUTE_LOGIN);
          }}
        >
          Log in
        </button>
        <button
          className="mx-2 rounded border px-2 py-1 bg-green-400 text-white light shadow shadow-inner"
          onClick={() => {
            //history.push(ROUTE_SIGNUP);
          }}
        >
          Sign up
        </button>
      </div>
      }
    </div>
  );
};
export default Header;
