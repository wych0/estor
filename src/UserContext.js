import { createContext, useState, useEffect} from "react"
import { checkAuth} from "./Auth"
import { getRole } from './apiCalls/auth'

export const UserContext = createContext({name: '', auth: null, cart: [], placedOrder: false, displayedOrder: "none", id: '', role: null})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({name: '', auth: checkAuth(), cart: [], placedOrder: false, displayedOrder: "none", id: '', role: null})

    const setRole = (role)=>{
        setUser((user)=>({
            ...user,
            role: role
        }))
    }

    useEffect(()=>{
        getRole()
        .then((role)=>{
            setRole(role)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[user.auth])
   
    const loginUser = (role)=>{
        setUser((user)=> ({
            ...user,
            role: role,
            id: 2,
            auth: checkAuth()
        }));
    };
    
    const logoutUser = () => {
        setUser((user) => ({
          ...user,
          name: '',
          cart: [],
          displayedOrder: "none",
          auth: checkAuth()
        }));
    };

    const addItemToCart = (product) => {
        setUser((user) => ({
            ...user,
            cart: [...user.cart, product]
        }));
    };

    const deleteItemFromCart = (productId) => {
        setUser((user) => ({
            ...user,
            cart: user.cart.filter((item)=> item.id !== productId),
        }))
    }

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
        logoutUser, 
        addItemToCart, 
        deleteItemFromCart, 
        placeOrder, 
        endOrderProcess, 
        displayOrderDetails: displayOrderDetails}}>
        {children}
        </UserContext.Provider>
    )
}

