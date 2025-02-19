import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ElementLight } from "./screens/ElementLight";
import { Frame } from "./screens/Frame";
import { FrameScreen } from "./screens/FrameScreen";
import { Screen } from "./screens/Screen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Screen />,
  },
  {
    path: "/u12507u12540u12512-1",
    element: <Screen />,
  },
  {
    path: "/1920w-light",
    element: <ElementLight />,
  },
  {
    path: "/frame-34",
    element: <Frame />,
  },
  {
    path: "/frame-1000011790",
    element: <FrameScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
