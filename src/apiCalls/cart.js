import axios from 'axios'

export const getCart = async()=>{
    try{
        const response = await axios.get('http://localhost:8000/cart', {withCredentials: true})
        return Promise.resolve(response.data.cartItems)
    } catch(error){
        return Promise.reject(error.response.data.message)
    }
}

export const addItem = async(productID)=>{
    try{
        const response = await axios.post('http://localhost:8000/product/addToCart', 
        {productID},
        {withCredentials: true})
        return Promise.resolve(response.data.message) 
    } catch(error){
        return Promise.reject(error.response.data.message)
    }
}

export const deleteItem = async(productID)=>{
    try{
        const response = await axios.delete('http://localhost:8000/product/deleteFromCart',
        {data: {productID},
        withCredentials: true})
        return Promise.resolve(response.data.message) 
    } catch(error){
        return Promise.reject(error.response.data.message)
    }
}