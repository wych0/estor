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
import ProtectedAuth from './ProtectedAuth'
import ProtectedComplete from './ProtectedComplete';
import Complete from './routes/complete'
import Admin from './routes/admin';
import ProtectedAdmin from './ProtectedAdmin';


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
          element: <ProtectedAuth isLoggedIn={user.auth}> <RootAuth /></ProtectedAuth>,
          errorElement: <ErrorPage />,
        },
        {
          path: "/cart",
          element: <ProtectedAuth isLoggedIn={user.auth}> <Cart /></ProtectedAuth>,
          errorElement: <ErrorPage />
        },
        {
          path: "/account",
          element: <ProtectedAuth isLoggedIn={user.auth}> <Account /></ProtectedAuth>,
          errorElement: <ErrorPage />
        },
        {
          path: "/complete",
          element: <ProtectedComplete placedOrder={user.placedOrder}> <Complete /></ProtectedComplete>,
          errorElement: <ErrorPage />
        },
        {
          path: "/admin",
          element: <ProtectedAdmin role={user.role}><Admin /></ProtectedAdmin>,
          errorElement: <ErrorPage />
        }
    ]);

    return <RouterProvider router={router} />
}

export default App;
