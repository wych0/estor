import { createContext, useState, useEffect} from "react"
import { getRole, isAuth } from './apiCalls/auth'
import { getCart } from "./apiCalls/cart"

export const UserContext = createContext({name: '', auth: null, cart: [], placedOrder: false, displayedOrder: "none", id: '', role: null})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({name: '', auth: null, cart: [], placedOrder: false, displayedOrder: "none", id: '', role: null})

    const setRole = (role)=>{
        setUser((user)=>({
            ...user,
            role: role
        }))
    }

    const setCart = (cart)=>{
        setUser((user)=>({
            ...user,
            cart: cart
        }))
    }

    const setId = (id)=>{
        setUser((user)=>({
            ...user,
            id: id
        }))
    }

    const setAuth = (auth)=>{
        setUser((user)=>({
            ...user,
            auth: auth
        }))
    }

    useEffect(()=>{
        getRole().then((role)=>{setRole(role)})
        getCart().then((cart)=>{setCart(cart)})
        isAuth().then((auth)=>{setAuth(auth)})
        setId(document.cookie.split('; ').find(row=>row.startsWith('userID='))?.split('=')[1])
    },[user.auth])
   
    const loginUser = (role)=>{
        setUser((user)=> ({
            ...user,
            role: role,
            auth: isAuth()
        }));
    };
    
    const logoutUser = () => {
        setUser((user) => ({
          ...user,
          name: '',
          cart: [],
          displayedOrder: "none",
          auth: isAuth()
        }));
    };

    const placeOrder = () => {
        setUser((user) => ({
            ...user,
            placedOrder: true,
            cart: []
        })) 
    }

    const endOrderProcess = () => {
        setUser((user) => ({
            ...user, 
            placedOrder: false
        }))
    }

    const displayOrderDetails = (id) => {
        setUser((user) => ({
            ...user,
            displayedOrder: id,
        }))
    }

    return (
        <UserContext.Provider value={{
        user, 
        loginUser,
        setCart,
        logoutUser, 
        placeOrder, 
        endOrderProcess, 
        displayOrderDetails: displayOrderDetails}}>
        {children}
        </UserContext.Provider>
    )
}

