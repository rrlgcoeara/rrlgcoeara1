import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routing from "./routes/Routing.jsx";
import About from "./components/About.jsx";
import Team from "./components/Team.jsx";
import Sponsors from "./components/Sponsors.jsx";
import History from "./components/History.jsx";
import Memories from "./components/Memories.jsx";
import Contact from "./components/Contact.jsx";
import Achievements from "./components/Achievements.jsx";
import Projects from "./components/Projects.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routing />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Achievements",
        element: <Achievements />,
      },
      {
        path: "Projects",
        element: <Projects />,
      },
      {
        path: "Team",
        element: <Team />,
      },
      // {
      //   path: "Alumni",
      //   element: <Alumni />,
      // },
      {
        path: "Sponsors",
        element: <Sponsors />,
      },
      {
        path: "History",
        element: <History />,
      },
      {
        path: "Memories",
        element: <Memories />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
