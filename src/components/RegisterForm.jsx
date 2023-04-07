import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import {Link } from "react-router-dom";
import { UserContext } from '../UserContext';

const formStyle = {
    m: 1, 
    width: '55ch',
    height: 'auto',
    marginBottom: 2,
}

const inputStyle = {
    color: '#1A1882',
    borderColor: '#1A1882',
    fontWeight: "500",
}

const labelStyle = {
    color: '#1A1882',
    "&.Mui-focused":{
        color: '#1A1882',
        fontWeight: "700"
    },
    fontWeight: "300",
    fontSize: 18,
    bgcolor: 'white',
    paddingRight: 1
}

const iconStyle = {
    color: '#1A1882'
}

const btnStyle = {
    marginTop: 4,
    marginBottom: 5,
    height: 50,
    width: 450,
    bgcolor: '#1A1882',
    '&:hover':{
        bgcolor: '#283593'
    },
    fontSize: 16,
    fontWeight: "700",
} 



function RegisterForm() {
    const {login} = useContext(UserContext);
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
      <div className="boxForm register">
        <div className="boxLogoWelcome">
            <Link to={'/'}><img src="images/logo.png" alt="logo" className="logoImgForm"/></Link>
            <p className="text register">Nie masz jeszcze konta?</p>
            <p className="text register bottom">Zarejestruj się korzystając formularza poniżej</p>
        </div>
        <div className="boxLoginForm">
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
        <Link to={"/auth"}><Button variant="contained" sx={btnStyle} onClick={login}>Zarejestruj się</Button></Link>
      </div>
    );
  }
  
  export default RegisterForm;