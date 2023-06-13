import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Destination from "./components/Destination";

function App() {
  const changeTab = function (tabName) {
    const main = document.querySelector("main");
  };
  return (
    <BrowserRouter>
      <main>
        <Navbar changeTab={changeTab} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
