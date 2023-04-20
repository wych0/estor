import { createContext, useState} from "react";

export const UserContext = createContext({name: '', auth: false, cart: [], placedOrder: false, displayedOrder: "none", id: ' '})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({name: '', auth: false, cart: [], placedOrder: false, displayedOrder: "none", id: ' '})
    const login = (name)=>{
        setUser((user)=> ({
            ...user,
            name: name,
            auth: true,
            id: 2
        }));
    };
    
    const logout = () => {
        setUser((user) => ({
          ...user,
          name: '',
          auth: false,
          cart: [],
          displayedOrder: "none"
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
        login, 
        logout, 
        addItemToCart, 
        deleteItemFromCart, 
        placeOrder, 
        endOrderProcess, 
        displayOrderDetails: displayOrderDetails}}>
        {children}
        </UserContext.Provider>
    )
}

