import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import {Link } from "react-router-dom";
import Button from '@mui/material/Button';
import InputsShipDetails from './InputsShipDetails';

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

          <InputsShipDetails formStyle={formStyle} placeHolder="Imię"/>
          <InputsShipDetails formStyle={formStyle} placeHolder="Nazwisko"/>
          <InputsShipDetails formStyle={formStyleBig} placeHolder="Ulica, numer domu, numer mieszkania"/>
          <InputsShipDetails formStyle={formStyleMedium} placeHolder="Miasto"/>
          <InputsShipDetails formStyle={formStyleSmall} placeHolder="Kod-Pocztowy"/>
          <InputsShipDetails formStyle={formStyleBig} placeHolder="Adres e-mail"/>
          <InputsShipDetails formStyle={formStyleMedium} placeHolder="Kraj"/>

          <div className="shipDetailsBtnBox flex centerX">
            <Button disabled={isBtnDisabled} component={Link} to={"/complete"} variant="contained" sx={btnStyle} onClick={placeOrder}>Zamów z obowiązkiem zapłaty</Button>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default ShipDetails;