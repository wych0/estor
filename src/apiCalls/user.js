import axios from "axios"

export const getRole = async()=>{
    try{
      const response = await axios.get('http://localhost:8000/user/role', {withCredentials: true})
      return Promise.resolve(response.data.role)
    } catch(error){
      return Promise.reject(error.response.data.error)
    }
  }
  
  export const isAuth = async()=>{
    try{
      const response = await axios.get('http://localhost:8000/user/isAuth', {withCredentials: true})
      return Promise.resolve(response.data.isAuth)
    } catch(error){
      return Promise.reject(error.response.data.error)
    }
  }

  export const getAddress = async()=>{
    try{
        const response = await axios.get('http://localhost:8000/user/address', {withCredentials: true})
        return Promise.resolve(response.data.shipAddress)
    } catch(error){
        return Promise.reject(error.reponse.data.error)
    }
  }

  export const getUsers = async()=>{
    try{
      const response = await axios.get('http://localhost:8000/user/all', {withCredentials: true})
      return Promise.resolve(response.data.users)
    } catch(error){
      return Promise.reject(error.reponse.data.error)
    }
  }

  export const blockUser = async(userID)=>{
    try{
      const response = await axios.put(`http://localhost:8000/user/block/${userID}`,{} ,{withCredentials: true})
      return Promise.resolve(response.data.message)
    } catch(error){
      return Promise.reject(error.response.data.error)
    }
  }