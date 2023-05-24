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