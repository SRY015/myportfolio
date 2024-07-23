import React from "react";
import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Layouts/Navbar";
import ErrorPage from "./Pages/ErrorPage";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Resume from "./Pages/Resume";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "myportfolio/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default appRouter;
