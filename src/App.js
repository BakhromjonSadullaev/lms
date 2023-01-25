import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.js";
import React from "react";
import Main from "./pages/Main";

import "./App.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
