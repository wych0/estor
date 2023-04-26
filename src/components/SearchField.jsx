import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

const formStyle = {
  "@media (max-width:1600px)": {
    width: '25ch',
  },
  width: '35ch'
}

const inputStyle = {
  '& .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: "#1A1882"
  },
  "@media (max-width:1600px)": {
    height: '40px',
    fontSize: '12px',
  },
  fontSize: '16px',
  height: '50px',
  color: '#1A1882',
  fontWeight: "500",
  bgcolor: 'white'
}

const iconStyle = {
  "@media (max-width:1600px)": {
    fontSize: '24px',
  },
  fontSize: '32px',
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