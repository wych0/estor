import axios from 'axios'

export const getProducts = async()=>{
    try{
        const response = await axios.get('http://localhost:8000/product/all', {withCredentials: true})
        return Promise.resolve(response.data.products)
    } catch(error){
        return Promise.reject(error.response.data.message)
    }
}

export const getProduct = async(productID)=>{
    try{
        const response = await axios.get(`http://localhost:8000/product?productID=${productID}`,
        {withCredentials: true})
        return Promise.resolve(response.data.product)
    } catch(error){
        return Promise.reject(error.response.data.message)
    }
}

