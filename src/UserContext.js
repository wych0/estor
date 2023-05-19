import { createContext, useState} from "react"
import { checkAuth} from "./Auth"

export const UserContext = createContext({name: '', auth: checkAuth(), cart: [], placedOrder: false, displayedOrder: "none", id: '', role: 'none'})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({name: '', auth: checkAuth(), cart: [], placedOrder: false, displayedOrder: "none", id: '', role: 'none'})
   
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

