import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import Project from "./components/Project/Project";

const sitename = "Viet Anh Developer";

const router = createBrowserRouter([
  {
    path: "",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home sitename={sitename} />,
      },
      {
        path: "/about-me",
        element: <AboutMe sitename={sitename} />,
      },
      {
        path: "my-portfolio",
        // element: <MyPortfolio sitename={sitename} />,
        children: [
          { index: true, element: <MyPortfolio sitename={sitename} /> },
          {
            path: ":project",
            element: <Project sitename={sitename} />,
          },
        ],
      },
    ],
  },
]);

export default router;
