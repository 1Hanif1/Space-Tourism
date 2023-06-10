import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Destination from "./components/Destination";

const changeTab = function (tabName) {
  console.log(tabName);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
]);

function App() {
  return (
    <main>
      <Navbar changeTabFunction={changeTab} />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </main>
  );
}

export default App;
