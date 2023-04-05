import {  IconButton, Box, InputBase } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

const boxStyle = {
  display: 'inline-block',
  bgcolor: 'white',
  borderRadius: 2,
  border: 1,
  borderColor: '#1A1882',
  maxHeight: 45,
  minWidth: 322
}

const inputStyle = {
  color: '#1A1882',
  fontSize: 15,
  minWidth: 273
}

const searchStyle = {
  color: '#1A1882',
  fontSize: 30,
}

function SearchField(props) {
    return (
        <div className="search home">
          <Box sx={boxStyle}>
          <IconButton>
          <SearchOutlined sx={searchStyle}/>
          </IconButton>
          <InputBase onChange={props.onChangeFun} placeholder='Wyszukaj produkt..' sx={inputStyle}/>
          </Box>
        </div>   
    );
  }
  
  export default SearchField;