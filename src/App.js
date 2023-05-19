import './App.css'
import {React, useContext} from 'react'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import "./index.css"
import Root from "./routes/root"
import ErrorPage from "./routes/error-page"
import Login from "./routes/login"
import Cart from "./routes/cart"
import Register from "./routes/register"
import RootPrivate from './routes/root-private'
import Account from './routes/account'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { UserContext } from './UserContext'
import Complete from './routes/complete'
import Admin from './routes/admin'
import { ProtectedAuth, ProtectedComplete } from './ProtectedRoutes'

function App(){
    const {user} = useContext(UserContext)
    if(!user.role || user.auth===null){
      return null
    }

    const router = createBrowserRouter([
        {
          path: "/",
          element: user.auth && user.role==='admin' ? <Admin/> : user.auth ? <RootPrivate /> : <Root />,
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
          path: "/cart",
          element: <ProtectedAuth isLoggedIn={user.auth}> <Cart /> </ProtectedAuth>,
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
        }
    ]);

    return <RouterProvider router={router} />
}

export default App;
