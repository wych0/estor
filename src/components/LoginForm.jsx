import React, { useContext } from 'react';
import {Link } from "react-router-dom";
import { UserContext } from '../UserContext';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import Button from '@mui/material/Button';

const formStyle = {
  mb: 2.5,
    width: '52ch',
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
        fontWeight: "700"
    },
    fontWeight: "500",
    fontSize: 20,
    paddingRight: 1,
    bgcolor: 'white',
}

const iconStyle = {
    color: '#1A1882'
}

const btnLoginStyle = {
    marginTop: 4,
    marginBottom: 5,
    height: 50,
    width: 425,
    bgcolor: '#1A1882',
    '&:hover':{
        bgcolor: '#283593'
    },
    fontSize: 16,
    fontWeight: "700",
    "@media (max-width:1600px)": {
      width: 375,
      marginTop: 1.5,
      marginBottom: 4,
    },
} 



function LoginForm() {
    const {login} = useContext(UserContext);
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
      <div className="boxForm login flex wrap centerX shadow">
        <div className="boxLogoWelcome flex wrap centerX centerY">
            <Link to={'/'}><img src="images/logoSvg.svg" alt="logo" className="logoImgForm"/></Link>
            <p className="text welcome">Witamy ponownie!</p>
        </div>
        <div className="form flex">
        <FormControl sx={formStyle} variant="outlined">
          <InputLabel htmlFor="outlined-with-icon-adornment" sx={labelStyle} shrink={true}>Adres e-mail</InputLabel>
          <OutlinedInput
            startAdornment={
                <InputAdornment position="start">
                <EmailIcon sx={iconStyle} />
                </InputAdornment>
            }
            sx={inputStyle}
            id="outlined"
            label="Adres e-mail"
          />
        </FormControl>
        <FormControl sx={formStyle} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password-with-icon-adornment" sx={labelStyle}>Hasło</InputLabel>
          <OutlinedInput
            sx={inputStyle}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            startAdornment={
                <InputAdornment position="start">
                <HttpsIcon sx={iconStyle} />
                </InputAdornment>
            }
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
        <Link to={"/auth"}><Button variant="contained" sx={btnLoginStyle} onClick={login}>Zaloguj się</Button></Link>
      </div>
    );
  }
  
  export default LoginForm;