import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import { IconButton } from '@mui/material';
import { VisibilityOff } from '@mui/icons-material';
import Visibility from '@mui/icons-material/Visibility';
import { useState } from 'react';

  const inputStyle = {
    height:"50px",
    color: '#1A1882',
    borderColor: '#1A1882',
  }

  const iconStyle = {
    color: '#1A1882'
}


export const Input = ({isPassword, isStartIcon, formStyle, labelStyle, placeHolder}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

  const startAdornment = isStartIcon
    ? {
      startAdornment: <InputAdornment position="start">
        {isPassword
        ? <HttpsIcon sx={iconStyle} />
        : <EmailIcon sx={iconStyle} />}
      </InputAdornment>
    }
    : { }

  const typeInput = isPassword
  ? {
    type: showPassword ? 'text' : 'password'
  }
  : { }

  const endAdornment = isPassword 
  ? {
    endAdornment: <InputAdornment position="end">
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
  : { }
  
    return (
      <div className="formContainer">
        <FormControl sx={formStyle} variant="outlined">
            <InputLabel htmlFor="outlined" sx={labelStyle}>{placeHolder}</InputLabel>
            <OutlinedInput
              sx={inputStyle}
              label={placeHolder+"."}
              {...startAdornment}
              {...typeInput}
              {...endAdornment}
            />
          </FormControl>
      </div>
    );
  }

  const InputError = () => {
    return <div>error</div>
  }
  
