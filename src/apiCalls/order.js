import axios from "axios"
import { isBlocked } from "./user"

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
        return Promise.reject(error.response.data.errors)
    }
}

export const getOrders = async()=>{
    try{
        const response = await axios.get(`http://localhost:8000/order/all`,
        {withCredentials: true})
        return Promise.resolve(response.data.orders)
    } catch(error){
        return Promise.reject(error.response.data.errors)
    }
}

export const placeOrder = async(address)=>{
    try{
        const blocked = await isBlocked()
        if(blocked){
            return Promise.reject('User blocked')
        }
        await axios.post(`http://localhost:8000/order`,
        {address},
        {withCredentials: true})
        return Promise.resolve(true)
    } catch(error){
        return Promise.reject(error.response.data.message)
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
