import '../App.css';
import {  IconButton, Box, InputBase } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';


function SearchField() {
    return (
      <div className="search home">
        <Box sx={{
        display: 'inline-block',
        bgcolor: 'white',
        borderRadius: 2,
        border: 1,
        borderColor: '#1A1882',
        maxHeight: 45,
        }}>
        <IconButton>
        <SearchOutlined sx={{
        color: '#1A1882',
        fontSize: 30,
        }}/>
        </IconButton>
        <InputBase placeholder='Wyszukaj produkt..' sx={{
        color: '#1A1882',
        fontSize: 15,
        }}/>
        </Box>
      </div>

      
    );
  }
  
  export default SearchField;