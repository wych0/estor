import FormControl from '@mui/material/FormControl'
import { TextField } from '@mui/material';

const textFieldStyle = {
  height: '50px',
  "& .MuiOutlinedInput-root": {
    height: '100%',
  },
};

export const AddressField = ({formStyle, label, valueVar}) => {
  if(!valueVar){
    return null
  }
    console.log(valueVar)
    return (
      <div className="inputContainer">
        <FormControl sx={formStyle} variant="outlined">
        <TextField
          id="outlined-read-only-input"
          defaultValue={valueVar}
          label={label}
          InputProps={{
            readOnly: true,
          }}
          sx={textFieldStyle}
        />
        </FormControl>
      </div>
    );
  }

  
