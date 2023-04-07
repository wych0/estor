import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import Login from "./routes/login";
import Cart from "./routes/cart";
import Register from "./routes/register"
import RootAuth from './routes/rootauth';
import Account from './routes/account';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { UserProvider } from './UserContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/auth",
    element: <RootAuth />,
    errorElement: <ErrorPage />
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "auth/cart",
    element: <Cart />,
    errorElement: <ErrorPage />
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "auth/account",
    element: <Account />,
    errorElement: <ErrorPage />
  }
  
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </React.StrictMode>
);


