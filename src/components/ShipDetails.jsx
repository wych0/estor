import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import {Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Input from './Input';

const formStyle = {
  marginBottom: '5%',
  marginRight: '19px',
  width: '25ch',
  "@media (max-width:1600px)": {
    width: '21ch',
    marginRight: '10px',
  },
}

const formStyleMedium = {
  marginBottom: '4%',
  marginRight: '19px',
  width: '33ch',
  "@media (max-width:1600px)": {
    width: '27ch',
    marginRight: '10px',
  },
}

const formStyleSmall = {
  width: '17ch',
  "@media (max-width:1600px)": {
    width: '15ch',
  },
}

const formStyleBig = {
  marginBottom: '3%',
  width: '52ch',
  "@media (max-width:1600px)": {
    width: '43ch',
  },
}

const iconStyle = {
  color: '#1A1882',
  fontSize: '60px',
  "@media (max-width:1600px)": {
    fontSize: '50px',
  },
}

const labelStyle = {
  color: '#1A1882',
  "&.Mui-focused":{
      color: '#1A1882',
      fontWeight: "700",
      fontSize: 17
  },
  fontWeight: "400",
  fontSize: 15,
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
    const {user, placeOrder} = useContext(UserContext)
    const isBtnDisabled = user.cart.length===0 ? true : false
    return (
      <div className="bodyCartContent shipDetailsCart flex centerX shadow">
        <div className="shipDetailsForm flex wrap">
          <div className="boxText shipDetails flex centerY">
            <LocalShippingIcon sx={iconStyle}/> 
            <p className="text shipDetails">Dane do wysyłki</p>
          </div>

          <Input formStyle={formStyle} labelStyle={labelStyle} placeHolder="Imię"/>
          <Input formStyle={formStyle} labelStyle={labelStyle} placeHolder="Nazwisko"/>
          <Input formStyle={formStyleBig} labelStyle={labelStyle} placeHolder="Ulica, numer domu"/>
          <Input formStyle={formStyleMedium} labelStyle={labelStyle} placeHolder="Miasto"/>
          <Input formStyle={formStyleSmall} labelStyle={labelStyle} placeHolder="Kod-Pocztowy"/>
          <Input formStyle={formStyleBig} labelStyle={labelStyle} placeHolder="Adres e-mail"/>
          <Input formStyle={formStyleMedium} labelStyle={labelStyle} placeHolder="Kraj"/>

          <div className="shipDetailsBtnBox flex centerX">
            <Button disabled={isBtnDisabled} component={Link} to={"/complete"} variant="contained" sx={btnStyle} onClick={placeOrder}>Zamów z obowiązkiem zapłaty</Button>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default ShipDetails;