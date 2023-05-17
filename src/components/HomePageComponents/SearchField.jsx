import React from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import SearchIcon from '@mui/icons-material/Search'
import { OutlinedInputCustom } from '../OutlinedInputCustom'

const formStyle = {
  "@media (max-width:1600px)": {
    width: '25ch',
  },
  width: '35ch'
}

const iconStyle = {
  "@media (max-width:1600px)": {
    fontSize: '24px',
  },
  fontSize: '32px',
  color: '#1A1882'
}

export default function SearchField(props) {
    return (
        <div className="search flex centerY">
          <FormControl sx={formStyle} variant="outlined">
          <OutlinedInputCustom
            isvalid={'true'}
            startAdornment={
                <InputAdornment position="start">
                <SearchIcon sx={iconStyle} />
                </InputAdornment>
            }
            id="outlined"
            placeholder='Wyszukaj produkt..'
            onChange={props.onChangeFun}
          />
        </FormControl>
        </div>   
    );
  }
