import { createContext, useState} from "react";

export const UserContext = createContext({name: '', auth: false, cart: []})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({name: '', auth: false, cart: []})
    const login = (name)=>{
        setUser((user)=> ({
            ...user,
            name: name,
            auth: true,
        }));
    };
    
    const logout = () => {
        setUser((user) => ({
          ...user,
          name: '',
          auth: false,
          cart: []
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

    return (
        <UserContext.Provider value={{user, login, logout, addItemToCart, deleteItemFromCart}}>
        {children}
        </UserContext.Provider>
    )
}

