import './App.css';
import {React, useContext} from 'react';
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
import { UserContext } from './UserContext';
import Protected from './Protected'

function App(){
    const {user} = useContext(UserContext);
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root />,
          errorElement: <ErrorPage />
        },
        {
          path: "/register",
          element: <Register />,
          errorElement: <ErrorPage />
        },
        {
          path: "/login",
          element: <Login />,
          errorElement: <ErrorPage />
        },
        {
          path: "/auth",
          element: <Protected isLoggedIn={user.auth}> <RootAuth /></Protected>,
          errorElement: <ErrorPage />,
        },
        {
          path: "/cart",
          element: <Protected isLoggedIn={user.auth}> <Cart /></Protected>,
          errorElement: <ErrorPage />
        },
        {
          path: "/account",
          element: <Protected isLoggedIn={user.auth}> <Account /></Protected>,
          errorElement: <ErrorPage />
        }
    ]);

    return <RouterProvider router={router} />
}

export default App;
