import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import EmailIcon from '@mui/icons-material/Email'
import HttpsIcon from '@mui/icons-material/Https'
import { IconButton } from '@mui/material'
import { VisibilityOff } from '@mui/icons-material'
import Visibility from '@mui/icons-material/Visibility'
import { useState} from 'react'
import { useFormContext } from 'react-hook-form'
import { OutlinedInputCustom } from './OutlinedInputCustom'
import { InputLabelCustom } from './InputLabelCustom'
import { findInputErrors, isFormValid } from '../inputValidation'

export const Input = ({valueVar, isLettersOnly, isPrice, isPostalCode, isRegister, isEmail, isPassword, isStartIcon, formStyle, placeHolder}) => {
  const [showPassword, setShowPassword] = useState(false)
  const {register, formState: {errors}} = useFormContext()
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
      event.preventDefault()
  };
  const inputError = findInputErrors(errors, placeHolder)
  const isValid = isFormValid(inputError)
  let iconColor = {color: '#1A1882'}

  const formStyleDefault = formStyle ? formStyle : {width: '40ch'}

  const validation =  {
    required: {
      value: true,
      message: 'WYMAGANE',
    },
    ...((isPassword & isRegister) && {pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/,
      message: 'SŁABE HASŁO',
    }}),
    ...(isEmail && {pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "ZŁY FORMAT"
    }}),
    ...(isPostalCode && {pattern: {
      value: /^[0-9]{2}-[0-9]{3}$/i,
      message: "ZŁY FORMAT"
    }}),
    ...(isPrice && {pattern: {
      value: /^[1-9]\d{0,7}(?:\.\d{1,4})?$/i,
      message: "PODAJ LICZBĘ"
    }}),
    ...(isLettersOnly &&{pattern:{
      value: /^[A-Za-z\s]+$/,
      message: "TYLKO LITERY"
    }})
  }

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

  if(valueVar===undefined){
    return null
  }
  
    return (
      <div className="inputContainer">
        {!isValid 
        ? <Error message={inputError.error.message} />
        : <div className="errorContainer"><p className="text error">&nbsp;</p></div>
        }
        
        <FormControl sx={formStyleDefault} variant="outlined">
          <InputLabelCustom 
          fz={isStartIcon ? 18 : 14}
          isvalid={isValid.toString()} 
          htmlFor="outlined">
          {placeHolder}
          </InputLabelCustom>
          <OutlinedInputCustom
          isvalid = {isValid.toString()}
          label={placeHolder}
          defaultValue = {valueVar==='none' ? '' : valueVar}
          {...startAdornment}
          {...typeInput}
          {...endAdornment}
          {...register(placeHolder, validation)}
          />
            
        </FormControl>

        {isPassword & !isValid & isRegister
        ? inputError.error.message==='SŁABE HASŁO'
          ? <PasswordPattern />
          : ' '
        : ' '
        }
      </div>
    );
  }


  const Error = ({ message }) => {
    return (
      <div className="errorContainer">
        <p className="text error"><i className="bi bi-exclamation-circle-fill icon error"></i> {message}</p>
      </div>
      
    )
  }

const PasswordPattern = () => {
  return(
    <div className="passwordPattern">
      <p className="text pattern">Silne hasło - conajmniej:</p>
      <ul className="list text pattern">
        <li>8 znaków</li>
        <li>1 duża litera</li>
        <li>1 mała litera</li>
        <li>1 cyfra</li>
        <li>1 znak specjalny</li>
      </ul>
        
    </div>
  )
} 
  
