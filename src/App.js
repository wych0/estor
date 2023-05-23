import './App.css'
import {React, useContext} from 'react'
import { createBrowserRouter, RouterProvider, Navigate} from "react-router-dom"
import "./index.css"
import Root from "./routes/root"
import ErrorPage from "./routes/error-page"
import Login from "./routes/login"
import Cart from "./routes/cart"
import Register from "./routes/register"
import Account from './routes/account'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { UserContext } from './UserContext'
import Complete from './routes/complete'
import Admin from './routes/admin'
import { ProtectedComplete } from './ProtectedRoutes'


function App(){
    const {user} = useContext(UserContext)
    if(!user.role || user.auth===null){
      return null
    }

    const router = createBrowserRouter([
        {
          path: "/",
          element: user.auth && user.role==='admin' ? <Admin/> : <Root />,
          errorElement: <ErrorPage />
        },
        {
          path: "/register",
          element: user.auth ? <Navigate to="/" replace /> : <Register />,
          errorElement: <ErrorPage />
        },
        {
          path: "/login",
          element: user.auth ? <Navigate to="/" replace /> : <Login />,
          errorElement: <ErrorPage />
        },
        {
          path: "/cart",
          element: user.auth && user.role==='admin' ? <Navigate to="/" replace /> : user.auth ? <Cart /> : <Navigate to="/login" replace />,
          errorElement: <ErrorPage />
        },
        {
          path: "/account",
          element:user.auth && user.role==='admin' ? <Navigate to="/" replace /> : user.auth ? <Account /> : <Navigate to="/login" replace />,
          errorElement: <ErrorPage />
        },
        {
          path: "/complete",
          element: <ProtectedComplete placedOrder={user.placedOrder}> <Complete /></ProtectedComplete>,
          errorElement: <ErrorPage />
        }
    ]);

    return <RouterProvider router={router} />
}

export default App;
