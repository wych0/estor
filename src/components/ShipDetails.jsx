import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import {Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { Input } from './Input';
import {FormProvider} from 'react-hook-form'

const formStyle = {
  width: '21ch',
}

const formStyleMedium = {
  width: '27ch',
}

const formStyleSmall = {
  width: '15ch',
}

const formStyleBig = {
  width: '43.5ch',
}

const iconStyle = {
  color: '#1A1882',
  fontSize: '50px',
}

const labelStyle = {
  color: '#1A1882',
  "&.Mui-focused":{
      color: '#1A1882',
      fontWeight: "700",
      fontSize: 16,
  },
  fontWeight: "400",
  fontSize: 15,
}

const btnStyle = {
  height: 45,
  width: 350,
  fontSize: 13,
  bgcolor: '#1A1882',
  '&:hover':{
      bgcolor: '#283593'
  },
  fontWeight: "600",
} 

function ShipDetails() {
    const {user, placeOrder} = useContext(UserContext)
    const isBtnDisabled = user.cart.length===0 ? true : false
    return (
      <div className="bodyCartContent shipDetailsCart flex centerX shadow">
        <div className="shipDetailsFormContainer flex wrap centerX">
          <div className="boxText shipDetails flex centerY">
            <LocalShippingIcon sx={iconStyle}/> 
            <p className="text summaryCartHeaders">&nbsp;Dane do wysyłki</p>
          </div>
          <FormProvider>
            <form >
              <div className="formShipDetails flex wrap">
                <Input formStyle={formStyle} labelStyle={labelStyle} placeHolder="Imię"/>
                <Input formStyle={formStyle} labelStyle={labelStyle} placeHolder="Nazwisko"/>
                <Input formStyle={formStyleBig} labelStyle={labelStyle} placeHolder="Ulica, numer domu"/>
                <Input formStyle={formStyleMedium} labelStyle={labelStyle} placeHolder="Miasto"/>
                <Input formStyle={formStyleSmall} labelStyle={labelStyle} placeHolder="Kod-Pocztowy"/>
                <Input formStyle={formStyleBig} labelStyle={labelStyle} placeHolder="Adres e-mail"/>
                <Input formStyle={formStyleMedium} labelStyle={labelStyle} placeHolder="Kraj"/>
              </div>
              <Button disabled={isBtnDisabled} component={Link} to={"/complete"} variant="contained" sx={btnStyle} onClick={placeOrder}>Zamów z obowiązkiem zapłaty</Button>
            </form>
          </FormProvider>
        </div>
      </div>
    );
  }
  
  export default ShipDetails;