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
