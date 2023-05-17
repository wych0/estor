import React, { useContext, useEffect } from 'react'
import {Link, useNavigate } from "react-router-dom"
import { UserContext } from '../../UserContext'
import { SignupLoginBtn } from '../Buttons'
import { Input } from '../Input'
import {useForm} from 'react-hook-form'
import { FormProvider } from 'react-hook-form'
import { login } from '../../apiCalls/auth'

export default function LoginForm() {
    const methods = useForm()
    const {user, setAuth} = useContext(UserContext)
    const navigation = useNavigate()

    const onSubmit = methods.handleSubmit(async (data) => {
      try{
        const result = await login(data["E-mail"], data["Hasło"])
        console.log(result.message)
        setAuth(true, result.role)
      } catch(error){
        console.log(error)
      } 
    })

    useEffect(()=>{
      if(user.auth){
        user.role==='admin' ? navigation('/admin') : navigation('/auth')
      } 
    }, [user.auth, user.role, navigation])

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