import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import { Input } from '../Input'
import {FormProvider, useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { BigBtn } from "../Buttons"

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

export default function ShipDetails() {
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
      <div className="pageContent cartPage shipDetailsCart flex centerX shadow">
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
              <BigBtn disabled={isBtnDisabled} variant="contained" onClick={onSubmit}>Zamów z obowiązkiem zapłaty</BigBtn>
            </form>
          </FormProvider>
        </div>
      </div>
    );
  }