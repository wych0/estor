import React, { useContext } from 'react';
import {Link } from "react-router-dom";
import { UserContext } from '../UserContext';
import { SignupLoginBtn } from './SignupLoginBtn';
import Input from './Input';
import RegisterInputPassword from './RegisterInputPassword';

const formStyle = {
  mb: 2,
    width: '45ch',
    "@media (max-width:1600px)": {
      width: '40ch',
    },
}

function RegisterForm() {
    const {login} = useContext(UserContext);
    return (
      <div className="boxForm register flex wrap centerX shadow">
        <div className="boxWelcome register flex wrap centerX">
            <Link className="linkLogoImg"to={'/'}><img src="images/logoSvg.svg" alt="logo" className="logoImgForm"/></Link>
            
            
            <p className="text register">Nie masz jeszcze konta?</p>
            <p className="text register bottom">Zarejestruj się korzystając formularza poniżej</p>
        </div>
        <div className="form flex">
        <Input formStyle={formStyle} placeHolder="Imię"/>
        <Input formStyle={formStyle} placeHolder="Nazwisko"/>
        <Input formStyle={formStyle} placeHolder="Adres e-mail"/>
        <RegisterInputPassword formStyle={formStyle} placeHolder="Hasło"/>
        </div>
        <Link to={"/auth"}><SignupLoginBtn variant="contained" onClick={login}>Zarejestruj się</SignupLoginBtn></Link>
      </div>
    );
  }
  
  export default RegisterForm;