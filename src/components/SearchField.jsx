import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const textAreaStyle = {
  minWidth: 280,
  bgcolor: 'white',
  color: '#1A1882',
  borderColor: '#1A1882',
  fontWeight: "500",
  "&.Mui-focused":{
      color: '#1A1882',
      fontWeight: "700"
  },
 
}

const iconStyle = {
  color: '#1A1882',
  fontSize: '30px',
  marginRight: 1,
}

const inputStyle = {
  color: '#1A1882',
  fontSize: 15,
  borderRadius: 10,
}


function SearchField(props) {
    return (
        <div className="search flex centerY">
          <TextField
          sx={textAreaStyle}
          id="outlined-textarea"
          placeholder="Wyszykaj produkt.."
          onChange={props.onChangeFun}
          InputProps={{
            startAdornment: (
              <SearchIcon sx={iconStyle}/>
            ),
            style: inputStyle,
          }}
          />
        </div>   




    );
  }
  
  export default SearchField;