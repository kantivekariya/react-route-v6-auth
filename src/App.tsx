import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RootRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <RootRoutes />
    </BrowserRouter>
  );
}

export default App;
