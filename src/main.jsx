import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./pages/AboutMe.jsx";
import MyProjects from "./pages/MyProjects.jsx";
import Resume from "./pages/Resume.jsx";
import Inquiries from "./pages/Inquiries.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "/myprojects",
        element: <MyProjects />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/inquiries",
        element: <Inquiries />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);