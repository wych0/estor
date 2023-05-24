import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../UserContext'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import { Input } from '../Input'
import {FormProvider, useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { BigBtn } from "../Buttons"
import { placeOrder } from '../../apiCalls/order'

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
    const {user, placeOrderUser} = useContext(UserContext)
    const methods = useForm()
    const navigation = useNavigate()
    const isBtnDisabled = user.cart.length===0 ? true : false

    const onSubmit = methods.handleSubmit(async (data) => {
      try{
        const address={
          name: data['Imię'],
          secName: data['Nazwisko'],
          street: data['Ulica, numer domu'],
          city: data['Miasto'],
          postalCode: data['Kod-Pocztowy'],
          email: data['Adres e-mail'],
          country: data['Kraj']
        }
        const result = await placeOrder(address)
        placeOrderUser(result)
      } catch(error){
        console.log(error)
      } 
    })
    
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        onSubmit();
      }
    };

    useEffect(()=>{
      if(user.placedOrder){
        navigation("/complete")
      }
    },[user.placedOrder, navigation])

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