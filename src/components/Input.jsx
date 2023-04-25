import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';

  const inputStyle = {
    height:"50px",
    color: '#1A1882',
    borderColor: '#1A1882',
    fontWeight: "500",
  }

  const iconStyle = {
    color: '#1A1882'
}


function Input(props) {
  const iconAdornment = props.startIcon 
    ? {
      startAdornment: <InputAdornment position="start">
        <EmailIcon sx={iconStyle} />
      </InputAdornment>
    }
    : { }
    return (
      <div className="formContainer">
        <FormControl sx={props.formStyle} variant="outlined">
            <InputLabel htmlFor="outlined" sx={props.labelStyle}>{props.placeHolder}</InputLabel>
            <OutlinedInput
              sx={inputStyle}
              label={props.placeHolder+"."}
              {...iconAdornment}
            />
          </FormControl>
      </div>
    );
  }
  
  export default Input;