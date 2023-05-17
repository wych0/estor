import React, { useContext } from 'react'
import {Link, useNavigate } from "react-router-dom"
import { UserContext } from '../../UserContext'
import { SignupLoginBtn } from '../Buttons'
import { Input } from '../Input'
import {useForm} from 'react-hook-form'
import { FormProvider } from 'react-hook-form'
import axios from 'axios'

export default function LoginForm() {
    const methods = useForm()
    const {setRole, login} = useContext(UserContext)
    const navigation = useNavigate()

    const loginUser = async (email, password) =>{
      try{
        const response = await axios.post('http://localhost:8000/auth/login',{
          email,
          password
          },
        {withCredentials: true})
        await login()
        await navigation('/auth')
        console.log(response.data)
      } catch(error){
        console.log(error.response.data.message)
      }
      
    }

    const onSubmit = methods.handleSubmit( (data) => {
      loginUser(data["E-mail"], data["Hasło"])
    })

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        onSubmit();
      }
    };

    return (
      <div className="boxForm login flex wrap centerX shadow">
        <div className="boxWelcome flex wrap centerX centerY">
            <Link className="linkLogoImg login" to={'/'}><img src="images/logoSvg.svg" alt="logo" className="logoImgForm"/></Link>
            <p className="text welcome">Witamy ponownie!</p>
        </div>
        <FormProvider {...methods}> 
        <form className="flex wrap centerX" onSubmit={e => e.preventDefault()} noValidate onKeyPress={handleKeyPress} >
        <div className="form login flex">
          <Input isEmail={true} isStartIcon={true} placeHolder="E-mail"/>
          <Input name='password' isPassword={true} isStartIcon={true} placeHolder="Hasło" />
        </div>
        <SignupLoginBtn variant="contained" onClick={onSubmit}>Zaloguj się</SignupLoginBtn>
        </form>
        </FormProvider>
      </div>
    );
  }