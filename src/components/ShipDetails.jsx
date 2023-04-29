import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from '@mui/material/Button';
import { Input } from './Input';
import {FormProvider, useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const formStyle = {
  width: '21ch',
}

const formStyleBig = {
  width: '43.5ch',
}

const iconStyle = {
  color: '#1A1882',
  fontSize: '50px',
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
    const methods = useForm()
    const navigation = useNavigate()
    const isBtnDisabled = user.cart.length===0 ? true : false

    const onSubmit = methods.handleSubmit( (data) => {
      placeOrder()
      navigation("/complete")
    })
    
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        onSubmit();
      }
    };

    return (
      <div className="bodyCartContent shipDetailsCart flex centerX shadow">
        <div className="shipDetailsFormContainer flex wrap centerX">
          <div className="boxText shipDetails flex centerY">
            <LocalShippingIcon sx={iconStyle}/> 
            <p className="text summaryCartHeaders">&nbsp;Dane do wysyłki</p>
          </div>
          <FormProvider {...methods}>
            <form className="flex wrap centerX" onSubmit={e => e.preventDefault()} noValidate onKeyPress={handleKeyPress}>
              <div className="formShipDetails flex wrap">
                <Input formStyle={formStyle} placeHolder="Imię"/>
                <Input formStyle={formStyle}  placeHolder="Nazwisko"/>
                <Input formStyle={formStyleBig}  placeHolder="Ulica, numer domu"/>
                <Input formStyle={formStyle}  placeHolder="Miasto"/>
                <Input isPostalCode={true} formStyle={formStyle} placeHolder="Kod-Pocztowy"/>
                <Input isEmail={true} formStyle={formStyleBig} placeHolder="Adres e-mail"/>
                <Input formStyle={formStyle} placeHolder="Kraj"/>
              </div>
              <Button disabled={isBtnDisabled} variant="contained" sx={btnStyle} onClick={onSubmit}>Zamów z obowiązkiem zapłaty</Button>
            </form>
          </FormProvider>
        </div>
      </div>
    );
  }
  
  export default ShipDetails;