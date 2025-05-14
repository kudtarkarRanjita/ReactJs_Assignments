import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.tsx";
import Login from "./components/Login";
import InvestmentCalculator from "./components/InvestmentCalculator";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/InvestmentCalculator"
            element={<InvestmentCalculator />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
