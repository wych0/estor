import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

const formStyle = {
  width: '25ch',
}

const inputStyle = {
  height: '40px',
  fontSize: '12px',
  color: '#1A1882',
  fontWeight: "500",
  bgcolor: 'white'
}

const iconStyle = {
  color: '#1A1882'
}

function SearchField(props) {
    return (
        <div className="search flex centerY">
          <FormControl sx={formStyle} variant="outlined">
          <OutlinedInput
            startAdornment={
                <InputAdornment position="start">
                <SearchIcon sx={iconStyle} />
                </InputAdornment>
            }
            sx={inputStyle}
            id="outlined"
            placeholder='Wyszukaj produkt..'
            onChange={props.onChangeFun}
          />
        </FormControl>
        </div>   
    );
  }
  
  export default SearchField;