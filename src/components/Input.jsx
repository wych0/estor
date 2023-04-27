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

  if(!isValid){
    iconColor = {color: '#d32f2f'}
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
      <div className="inputContainer">
        {!isValid 
        ? <Error message={inputError.error.message} />
        : <div className="errorContainer"><p className="text error">&nbsp;</p></div>
        }
        
        <FormControl sx={formStyle} variant="outlined">
            <InputLabelCustom 
              fz={isStartIcon ? 18 : 14}
              isvalid={+isValid} 
              htmlFor="outlined">
              {placeHolder}
            </InputLabelCustom>

            <OutlinedInputCustom
              isvalid = {+isValid}
              label={placeHolder}
              {...startAdornment}
              {...typeInput}
              {...endAdornment}
              {...register(placeHolder, {
                required: {
                  value: true,
                  message: 'WYMAGANE',
                },
              })}
            />
        </FormControl>
      </div>
    );
  }


  const Error = ({ message }) => {
    return (
      <div className="errorContainer">
        <p className="text error"><i class="bi bi-exclamation-circle-fill icon error"></i> {message}</p>
      </div>
    )
  }
  
