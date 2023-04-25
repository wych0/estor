import React, { useContext } from 'react';
import {Link } from "react-router-dom";
import { UserContext } from '../UserContext';
import { SignupLoginBtn } from './SignupLoginBtn';
import Input from './Input';
import InputPassword from './InputPassword';

const formStyle = {
  mb: 2,
    width: '45ch',
    "@media (max-width:1600px)": {
      width: '40ch',
    },
}

const labelStyle = {
  color: '#1A1882',
  "&.Mui-focused":{
      color: '#1A1882',
      fontWeight: "700",
      fontSize: 18
  },
  fontWeight: "400",
  fontSize: 15,
}


function RegisterForm() {
    const {login} = useContext(UserContext);
    return (
      <div className="boxForm register flex wrap centerX shadow">
        <div className="boxWelcome register flex wrap centerX">
            <Link className="linkLogoImg register" to={'/'}><img src="images/logoSvg.svg" alt="logo" className="logoImgForm"/></Link>
            <p className="text register">Nie masz jeszcze konta?</p>
            <p className="text register bottom">Zarejestruj się korzystając formularza poniżej</p>
        </div>
        <div className="form flex">
        <Input formStyle={formStyle} labelStyle={labelStyle} placeHolder="Imię"/>
        <Input formStyle={formStyle} labelStyle={labelStyle} placeHolder="Nazwisko"/>
        <Input formStyle={formStyle} labelStyle={labelStyle} placeHolder="E-mail"/>
        <InputPassword startIcon={false} labelStyle={labelStyle} formStyle={formStyle} placeHolder="Hasło"/>
        </div>
        <Link to={"/auth"}><SignupLoginBtn variant="contained" onClick={login}>Zarejestruj się</SignupLoginBtn></Link>
      </div>
    );
  }
  
  export default RegisterForm;