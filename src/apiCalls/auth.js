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

export const register = async(name, secName, email, password)=>{
  try{
    const response = await axios.post('http://localhost:8000/auth/register', {
    name, 
    secName,
    email,
    password
  },
    {withCredentials: true})
    return Promise.resolve(response.data)
  } catch(error){
    return Promise.reject(error.response.data.error)
  }
}

export const getRole = async()=>{
  try{
    const response = await axios.get('http://localhost:8000/auth/role', {withCredentials: true})
    return Promise.resolve(response.data.role)
  } catch(error){
    return Promise.reject(error.response.data.error)
  }
}

export const isAuth = async()=>{
  try{
    const response = await axios.get('http://localhost:8000/auth', {withCredentials: true})
    return Promise.resolve(response.data.isAuth)
  } catch(error){
    return Promise.reject(error.response.data.error)
  }
}