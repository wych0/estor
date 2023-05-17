import axios from 'axios'

export const loginUser = async (email, password) =>{
    try{
      const response = await axios.post('http://localhost:8000/auth/login',{
        email,
        password
        },
      {withCredentials: true})
      console.log(response.data)
      return true
    } catch(error){
      console.log(error.response.data.message)
    }
  }