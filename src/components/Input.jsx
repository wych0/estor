import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import { IconButton } from '@mui/material';
import { VisibilityOff } from '@mui/icons-material';
import Visibility from '@mui/icons-material/Visibility';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { OutlinedInputCustom } from './OutlinedInputCustom';
import { InputLabelCustom } from './InputLabelCustom';
import { findInputErrors } from '../findInputErrors';
import { isFormValid } from '../isFormValid';

export const Input = ({isPassword, isStartIcon, formStyle, placeHolder}) => {
  const [showPassword, setShowPassword] = useState(false)
  const {register, formState: {errors}} = useFormContext()
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };
  const inputError = findInputErrors(errors, placeHolder)
  const isValid = isFormValid(inputError)
  let iconColor = {color: '#1A1882'}
  let placeholder = placeHolder

  if(!isValid){
    iconColor = {color: '#d32f2f'} 
    placeholder = `${placeholder} - ${inputError.error.message}`
  }
  
  const startAdornment = isStartIcon
    ? {
      startAdornment: <InputAdornment position="start">
        {isPassword
        ? <HttpsIcon sx={iconColor} />
        : <EmailIcon sx={iconColor} />}
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
        sx={iconColor}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
    }
  : { }
  
    return (
      <div className="formContainer">
        <FormControl sx={formStyle} variant="outlined">
            <InputLabelCustom 
              fz={isStartIcon ? 18 : 15}
              isvalid={+isValid} 
              htmlFor="outlined">
              {placeholder}
            </InputLabelCustom>

            <OutlinedInputCustom
              isvalid = {+isValid}
              label={placeholder}
              {...startAdornment}
              {...typeInput}
              {...endAdornment}
              {...register(placeHolder, {
                required: {
                  value: true,
                  message: 'Pole wymagane',
                },
              })}
            />
        </FormControl>
      </div>
    );
  }
  
