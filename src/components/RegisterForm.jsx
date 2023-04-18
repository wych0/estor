import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Link } from "react-router-dom";
import { UserContext } from '../UserContext';
import { SignupLoginBtn } from './SignupLoginBtn';

const formStyle = {
  mb: 1.5,
    width: '55ch',
    "@media (max-width:1600px)": {
      width: '45ch',
    },
}

const inputStyle = {
  color: '#1A1882',
  borderColor: '#1A1882',
  fontWeight: "500",
  "@media (max-width:1600px)": {
    height:"50px",
  },
}

const labelStyle = {
    color: '#1A1882',
    "&.Mui-focused":{
        color: '#1A1882',
        fontWeight: "700",
        fontSize: 16
    },
    fontWeight: "400",
    fontSize: 15,
}

const iconStyle = {
    color: '#1A1882'
}

function RegisterForm() {
    const {login} = useContext(UserContext);
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
      <div className="boxForm register flex wrap centerX shadow">
        <div className="boxLogoWelcome register flex wrap centerX">
            <Link to={'/'}><img src="images/logoSvg.svg" alt="logo" className="logoImgForm"/></Link>
            <p className="text register">Nie masz jeszcze konta?</p>
            <p className="text register bottom">Zarejestruj się korzystając formularza poniżej</p>
        </div>
        <div className="form flex">
        <FormControl sx={formStyle} variant="outlined">
          <InputLabel htmlFor="outlined" sx={labelStyle}>Imię</InputLabel>
          <OutlinedInput
            sx={inputStyle}
            id="outlined"
            label="Imię"
          />
        </FormControl>
        <FormControl sx={formStyle} variant="outlined">
          <InputLabel htmlFor="outlined" sx={labelStyle}>Nazwisko</InputLabel>
          <OutlinedInput
            sx={inputStyle}
            id="outlined"
            label="Nazwisko"
          />
        </FormControl>
        <FormControl sx={formStyle} variant="outlined">
          <InputLabel htmlFor="outlined" sx={labelStyle}>Adres e-mail</InputLabel>
          <OutlinedInput
            sx={inputStyle}
            id="outlined"
            label="Adres e-mail"
          />
        </FormControl>
        <FormControl sx={formStyle} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" sx={labelStyle}>Hasło</InputLabel>
          <OutlinedInput
            sx={inputStyle}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  sx={iconStyle}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Hasło"
          />
        </FormControl>
        </div>
        <Link to={"/auth"}><SignupLoginBtn variant="contained" onClick={login}>Zarejestruj się</SignupLoginBtn></Link>
      </div>
    );
  }
  
  export default RegisterForm;