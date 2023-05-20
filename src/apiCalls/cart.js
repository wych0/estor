import axios from 'axios'

export const getCart = async()=>{
    try{
        const response = await axios.get('http://localhost:8000/cart', {withCredentials: true})
        return Promise.resolve(response.data.cartItems)
    } catch(error){
        return Promise.reject(error.response.data.message)
    }
}

export const addItem = async()=>{
    try{
        const response = await axios.post('http://localhost:8000/product/addToCart', 
        {productID: '6463a6a050b3e831dd48570d'},
        {withCredentials: true})
        return Promise.resolve(response.data.message) 
    } catch(error){
        return Promise.reject(error.response.data.message)
    }
}