import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, {useState} from 'react';
import HttpsIcon from '@mui/icons-material/Https';

  const inputStyle = {
    height:"50px",
    color: '#1A1882',
    borderColor: '#1A1882',
    fontWeight: "500",
  }

  const iconStyle = {
    color: '#1A1882'
}

function InputPassword(props) {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const iconAdornment = props.startIcon 
    ? {
      startAdornment: <InputAdornment position="start">
        <HttpsIcon sx={iconStyle} />
      </InputAdornment>
    }
    : { }
    
    return (
      <div className="formContainer">
        <FormControl sx={props.formStyle} variant="outlined">
            <InputLabel htmlFor="outlined" sx={props.labelStyle}>{props.placeHolder}</InputLabel>
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
            {...iconAdornment}
            label={props.placeHolder}
          />
          </FormControl>
      </div>
    );
  }
  
  export default InputPassword;
