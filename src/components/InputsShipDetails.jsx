import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
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
    },
    fontWeight: "400",
    fontSize: 16,
    "@media (max-width:1600px)": {
      fontSize: 14,
    },
  }

function InputsShipDetails(props) {
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
  
  export default InputsShipDetails;