import React, { useContext, useEffect } from 'react'
import {Link, useNavigate } from "react-router-dom"
import { UserContext } from '../../UserContext'
import { SignupLoginBtn } from '../Buttons'
import { Input } from '../Input'
import {useForm} from 'react-hook-form'
import { FormProvider } from 'react-hook-form'
import { login } from '../../apiCalls/auth'
import { useState } from 'react'
import { AlertAuth } from '../Alerts'

export default function LoginForm() {
    const methods = useForm()
    const {user, loginUser} = useContext(UserContext)
    const navigation = useNavigate()
    const [error, setError] = useState()

    const onSubmit = methods.handleSubmit(async (data) => {
      try{
        const result = await login(data["E-mail"], data["Hasło"])
        loginUser(result.role)
      } catch(error){
        setError(error)
      } 
    })

    useEffect(()=>{
      if(user.auth){
        navigation('/')
      } 
    }, [user.auth, navigation])

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
        {error
          ? <AlertAuth icon={false}><i className="bi bi-exclamation-circle-fill icon error"></i> {error}</AlertAuth>
          : ''
        }
        <FormProvider {...methods}> 
        <form className="flex wrap centerX" onSubmit={e => e.preventDefault()} noValidate onKeyPress={handleKeyPress} >
        <div className="form login flex">
          <Input valueVar='none' isEmail={true} isStartIcon={true} placeHolder="E-mail"/>
          <Input valueVar='none' isPassword={true} isStartIcon={true} placeHolder="Hasło" />
        </div>
        <SignupLoginBtn variant="contained" onClick={onSubmit}>Zaloguj się</SignupLoginBtn>
        </form>
        </FormProvider>
      </div>
    );
  }