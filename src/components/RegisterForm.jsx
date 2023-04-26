import React, { useContext } from 'react';
import {Link } from "react-router-dom";
import { UserContext } from '../UserContext';
import { SignupLoginBtn } from './SignupLoginBtn';
import { Input } from './Input';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { FormProvider } from 'react-hook-form';

const formStyle = {
    width: '45ch',
    "@media (max-width:1600px)": {
      width: '40ch',
    },
}


function RegisterForm() {
    const methods = useForm()
    const {login} = useContext(UserContext)
    const navigation = useNavigate()

    const onSubmit = methods.handleSubmit( (data) => {
      console.log(data);
      login()
      navigation("/auth")
    })
    return (
      <div className="boxForm register flex wrap centerX shadow">
        <div className="boxWelcome register flex wrap centerX">
            <Link className="linkLogoImg register" to={'/'}><img src="images/logoSvg.svg" alt="logo" className="logoImgForm"/></Link>
            <p className="text register top">Nie masz jeszcze konta?</p>
            <p className="text register bottom">Zarejestruj się korzystając formularza poniżej</p>
        </div>
        <FormProvider {...methods}>
        <form className="flex wrap centerX" onSubmit={e => e.preventDefault()} noValidate>
        <div className="form register flex">
        <Input formStyle={formStyle} placeHolder="Imię"/>
        <Input formStyle={formStyle} placeHolder="Nazwisko"/>
        <Input formStyle={formStyle} placeHolder="E-mail"/>
        <Input isPassword={true} formStyle={formStyle} placeHolder="Hasło" />
        </div>
        <SignupLoginBtn variant="contained" onClick={onSubmit}>Zarejestruj się</SignupLoginBtn>
        </form>
        </FormProvider>
      </div>
    );
  }
  
  export default RegisterForm;