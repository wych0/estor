import { createContext, useState, useEffect} from "react"
import { getRole, isAuth } from './apiCalls/user'
import { getCart } from "./apiCalls/cart"

export const UserContext = createContext({name: '', auth: null, cart: [], placedOrder: false, displayedOrder: null, id: '', role: null})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({name: '', auth: null, cart: [], placedOrder: false, displayedOrder: null, id: '', role: null})

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

    const setPlacedOrder = (placedOrder)=>{
        setUser((user)=>({
            ...user,
            placedOrder
        }))
    }

    useEffect(()=>{
        if(user.auth===true){
            getCart().then((cart)=>{setCart(cart)})
        }
        getRole().then((role)=>{setRole(role)})
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
          displayedOrder: null,
          auth: isAuth()
        }));
    };

    const placeOrderUser = (placedOrder) => {
        setPlacedOrder(placedOrder)
        setCart([])
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
        placeOrderUser,
        setPlacedOrder, 
        displayOrderDetails: displayOrderDetails}}>
        {children}
        </UserContext.Provider>
    )
}

