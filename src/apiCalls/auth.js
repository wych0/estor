import axios from 'axios'

export const login = async (email, password) =>{
    try{
      const response = await axios.post('http://localhost:8000/auth/login',{
        email,
        password
        },
      {withCredentials: true})
      return Promise.resolve(response.data)
    } catch(error){
      return Promise.reject(error.response.data.message)
    }
  }

export const logout = async()=>{
  try{
    const response = await axios.post('http://localhost:8000/auth/logout',{},{withCredentials: true})
    return Promise.resolve(response.data)
  } catch(error){
    return Promise.reject(error.response.data.message)
  }
}