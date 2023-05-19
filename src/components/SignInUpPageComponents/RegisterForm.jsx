import React, { useContext } from 'react'
import {Link } from "react-router-dom"
import { UserContext } from '../../UserContext'
import { SignupLoginBtn } from '../Buttons'
import { Input } from '../Input'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { FormProvider } from 'react-hook-form'
import { register } from '../../apiCalls/auth'
import { useEffect, useState } from 'react'
import { AlertAuth } from '../Alerts'

function RegisterForm() {
    const [error, setError] = useState()
    const methods = useForm()
    const {loginUser, user} = useContext(UserContext)
    const navigation = useNavigate()

    const onSubmit = methods.handleSubmit( async (data) => {
      try{
        const result = await register(data['Imię'], data['Nazwisko'], data['E-mail'], data['Hasło'])
        loginUser('klient')
      } catch(error){
        if(error){
          setError(error)
        }
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
      <div className="boxForm register flex wrap centerX shadow">
        <div className="boxWelcome register flex wrap centerX">
            <Link className="linkLogoImg register" to={'/'}><img src="images/logoSvg.svg" alt="logo" className="logoImgForm"/></Link>
            <p className="text register top">Nie masz jeszcze konta?</p>
            <p className="text register bottom">Zarejestruj się korzystając formularza poniżej</p>
        </div>
        {error
          ? <AlertAuth icon={false}><i className="bi bi-exclamation-circle-fill icon error"></i> {error}</AlertAuth>
          : ''
        }
        <FormProvider {...methods}>
        <form className="flex wrap centerX" onSubmit={e => e.preventDefault()} noValidate onKeyPress={handleKeyPress}>
        <div className="form register flex">
        <Input isLettersOnly={true} placeHolder="Imię"/>
        <Input isLettersOnly={true} placeHolder="Nazwisko"/>
        <Input isEmail={true} placeHolder="E-mail"/>
        <Input isPassword={true} isRegister={true} placeHolder="Hasło" />
        </div>
        <SignupLoginBtn variant="contained" onClick={onSubmit}>Zarejestruj się</SignupLoginBtn>
        </form>
        </FormProvider>
      </div>
    );
  }
  
  export default RegisterForm;