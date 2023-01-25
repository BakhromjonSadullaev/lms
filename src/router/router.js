import { createBrowserRouter } from "react-router-dom";
import Classes from "../pages/Classes/Classes";
import Main from "../pages/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/classes",
    element: <Classes />,
  },
]);
