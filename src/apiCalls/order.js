import axios from "axios"

export const getUserOrders = async(userID)=>{
    try{
        const response = await axios.get(`http://localhost:8000/order/userOrders?userID=${userID}`,
        {withCredentials: true})
        if(response.data.message){
            return Promise.resolve([])
        }
        return Promise.resolve(response.data.orders)
    } catch(error){
        return Promise.reject(error.response.data.message)
    }
}

export const getOrder = async(orderID)=>{
    try{
        const response = await axios.get(`http://localhost:8000/order/?orderID=${orderID}`,
        {withCredentials: true})
        return Promise.resolve(response.data.order)
    } catch(error){
        return Promise.reject(error.reponse)
    }
}

export const placeOrder = async(address)=>{
    try{
        await axios.post(`http://localhost:8000/order`,
        {address},
        {withCredentials: true})
        return Promise.resolve(true)
    } catch(error){
        return Promise.reject(false)
    }
}

export const cancelOrder = async(orderID)=>{
    try{
        const response = await axios.put(`http://localhost:8000/order/cancel/${orderID}`,
        {},
        {withCredentials: true})
        return Promise.resolve(response.data.message)
    } catch(error){
        return Promise.reject(error.data.error)
    }
}
