import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
  const inputStyle = {
    height:"50px",
    color: '#1A1882',
    borderColor: '#1A1882',
    fontWeight: "500",
  }
  
  const labelStyle = {
    color: '#1A1882',
    "&.Mui-focused":{
        color: '#1A1882',
        fontWeight: "700",
    },
    fontWeight: "400",
    fontSize: 14,
  }

function Input(props) {
    return (
      <div className="formContainer">
        <FormControl sx={props.formStyle} variant="outlined">
            <InputLabel htmlFor="outlined" sx={labelStyle}>{props.placeHolder}</InputLabel>
            <OutlinedInput
              sx={inputStyle}
              label={props.placeHolder}
            />
          </FormControl>
      </div>
    );
  }
  
  export default Input;