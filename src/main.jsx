import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home.jsx";
import Resume from "./pages/Resume/Resume.jsx";
import Services from "./pages/Services/Services.jsx";
import QuestionsAndAnswers from "./pages/QuestionsAndAnswers/QuestionsAndAnswers.jsx";
import Company from "./pages/Company/Company.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import Profile from "./pages/Profile/Profile.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/faq",
        element: <QuestionsAndAnswers />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
