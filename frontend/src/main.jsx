import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Home from "./pages/home.jsx";
import Lancamento from "./pages/lancamento.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import { AuthProvider } from "./contexts/authContext.jsx";
import { ThemeProvider } from "./contexts/themeContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  // Rotas Públicas
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  // Rotas Privadas
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: "/lancamento",
            element: <Lancamento />,
          },
          // { path: "/transacoes", element: <Transacoes /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
