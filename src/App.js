import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import React from 'react';
import ErrorHandler from "./components/ErrorHandler";

export default function App(props){

  return (
      <React.StrictMode>
          <BrowserRouter >
              <ErrorHandler>
                  <div className="App">
                      <AppRoutes />
                  </div>
              </ErrorHandler>
          </BrowserRouter>
      </React.StrictMode>

  )
}
