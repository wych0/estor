import React, { useContext } from 'react';
import {Link } from "react-router-dom";
import { UserContext } from '../UserContext';
import { SignupLoginBtn } from './SignupLoginBtn';
import { Input } from './Input';

const formStyle = {
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
  },
  fontWeight: "500",
  fontSize: 17,
}



function LoginForm() {
    const {login} = useContext(UserContext);

    return (
      <div className="boxForm login flex wrap centerX shadow">
        <div className="boxWelcome flex wrap centerX centerY">
            <Link className="linkLogoImg login" to={'/'}><img src="images/logoSvg.svg" alt="logo" className="logoImgForm"/></Link>
            <p className="text welcome">Witamy ponownie!</p>
        </div>
        <div className="form login flex">
        <Input isStartIcon={true} formStyle={formStyle} labelStyle={labelStyle} placeHolder="E-mail" />
        <Input isPassword={true} isStartIcon={true} formStyle={formStyle} labelStyle={labelStyle} placeHolder="Hasło" />
        </div>
        <Link to={"/auth"}><SignupLoginBtn variant="contained" onClick={login}>Zaloguj się</SignupLoginBtn></Link>
      </div>
    );
  }
  
  export default LoginForm;