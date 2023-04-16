import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import {Link } from "react-router-dom";
import Button from '@mui/material/Button';


const formStyle = {
  marginRight: '19px',
  width: '25ch',
  height: 'auto',
  marginBottom: '25px',
  "@media (max-width:1600px)": {
    width: '21ch',
    marginRight: '10px',
    marginBottom: '15px',
  },
}

const formStyleMedium = {
  marginRight: '19px',
  width: '33ch',
  height: 'auto',
  marginBottom: '25px',
  "@media (max-width:1600px)": {
    width: '27ch',
    marginRight: '10px',
    marginBottom: '15px',
  },
}

const formStyleSmall = {
  width: '17ch',
  height: 'auto',
  marginBottom: '25px',
  "@media (max-width:1600px)": {
    width: '15ch',
    marginBottom: '15px',
  },
}

const formStyleBig = {
  width: '52ch',
  height: 'auto',
  marginBottom: '25px',
  "@media (max-width:1600px)": {
    width: '43ch',
    marginBottom: '15px',
  },
}

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

const iconStyle = {
  color: '#1A1882',
  fontSize: '60px',
  "@media (max-width:1600px)": {
    fontSize: '50px',
  },
}

const btnStyle = {
  marginTop: 3,
  marginBottom: 3,
  height: 50,
  width: 400,
  bgcolor: '#1A1882',
  '&:hover':{
      bgcolor: '#283593'
  },
  fontSize: 16,
  fontWeight: "700",
  "@media (max-width:1600px)": {
    marginTop: 2.5,
    marginBottom: 2.5,
    height: 45,
    width: 350,
    fontSize: 13,
    fontWeight: "600",
  },
} 


function ShipDetails() {
    const {placeOrder} = useContext(UserContext);
    return (
      <div className="bodyCartContent orderDetailsCart flex centerX shadow">
        <div className="orderDetailsForm flex wrap">
          <div className="boxText orderDetails flex centerY">
            <LocalShippingIcon sx={iconStyle}/> 
            <p className="text orderDetails">Dane do wysyłki</p>
          </div>
          
          <FormControl sx={formStyle} variant="outlined">
            <InputLabel htmlFor="outlined" sx={labelStyle}>Imię</InputLabel>
            <OutlinedInput
              sx={inputStyle}
              id="outlined"
              label="Imię"
            />
          </FormControl>
          <FormControl sx={formStyle} variant="outlined">
            <InputLabel htmlFor="outlined" sx={labelStyle}>Nazwisko</InputLabel>
            <OutlinedInput
              sx={inputStyle}
              id="outlined"
              label="Nazwisko"
            />
          </FormControl>
          <FormControl sx={formStyleBig} variant="outlined">
            <InputLabel htmlFor="outlined" sx={labelStyle}>Ulica, numer domu, numer mieszkania</InputLabel>
            <OutlinedInput
              sx={inputStyle}
              id="outlined"
              label="Ulica, numer domu, numer mieszkania"
            />
          </FormControl>
          <FormControl sx={formStyleMedium} variant="outlined">
            <InputLabel htmlFor="outlined" sx={labelStyle}>Miasto</InputLabel>
            <OutlinedInput
              sx={inputStyle}
              id="outlined"
              label="Miasto"
            />
          </FormControl>
          <FormControl sx={formStyleSmall} variant="outlined">
            <InputLabel htmlFor="outlined" sx={labelStyle}>Kod-Pocztowy</InputLabel>
            <OutlinedInput
              sx={inputStyle}
              id="outlined"
              label="Kod-Pocztowy"
            />
          </FormControl>
          <FormControl sx={formStyleBig} variant="outlined">
            <InputLabel htmlFor="outlined" sx={labelStyle}>Adres e-mail</InputLabel>
            <OutlinedInput
              sx={inputStyle}
              id="outlined"
              label="Adres e-mail"
            />
          </FormControl>
          <FormControl sx={formStyleMedium} variant="outlined">
            <InputLabel htmlFor="outlined" sx={labelStyle}>Kraj</InputLabel>
            <OutlinedInput
              sx={inputStyle}
              id="outlined"
              label="Kraj"
            />
          </FormControl>
          <div className="orderDetailsBtnBox flex centerX">
            <Link to={"/complete"}><Button variant="contained" sx={btnStyle} onClick={placeOrder}>Zamów z obowiązkiem zapłaty</Button></Link>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default ShipDetails;