import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import {createStore,applyMiddleware} from "@reduxjs/toolkit";
import {storeReducers} from "./store/reducers";
import {initStore} from "./store/actions";
import {Provider} from "react-redux";
import {App_Store,User_Cred_Store_By_Email} from './store'
import {createLogger} from "redux-logger";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const middleware = [createLogger()]
const store = createStore(storeReducers,applyMiddleware(...middleware));

store.dispatch(initStore({...App_Store,"user_credential":{...User_Cred_Store_By_Email},}))

root.render(
  <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </StrictMode>
);
