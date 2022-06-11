import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import ErrorHandler from "./components/ErrorHandler";

export default function App(props) {
  return (
    <BrowserRouter>
      <ErrorHandler>
        <div className="App">
          <AppRoutes />
        </div>
      </ErrorHandler>
    </BrowserRouter>
  );
}
