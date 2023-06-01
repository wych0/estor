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

export const deleteProduct = async(productID)=>{
    try{
        const response = await axios.delete(`http://localhost:8000/product/${productID}`,
        {withCredentials: true})
        return Promise.resolve(response.data.message)
    } catch(error){
        return Promise.reject(error.response.data.message)
    }
}

export const createProduct = async(data)=>{
    try{
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('brand', data.brand)
        formData.append('price', data.price)
        formData.append('image', data.image)
        const response = await axios.post('http://localhost:8000/product/create',
        formData,
        {withCredentials: true})
        return Promise.resolve(response.data.message)
    } catch(error){
        return Promise.reject(error.response.data)
    }
}

