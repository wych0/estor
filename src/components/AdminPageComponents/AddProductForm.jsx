import {FormProvider, useForm} from 'react-hook-form'
import { Input } from '../Input'
import { MidBtn } from '../Buttons'
import { ImageInput } from './ImageInput'
import { createProduct } from '../../apiCalls/product'
import { useState, useEffect } from 'react'

const formStyle = {
    width: '20ch',
}

export function AddProductForm({onProductAdd}){
    const methods = useForm()
    const [isAdded, setIsAdded] = useState('')
    const onSubmit = methods.handleSubmit( async (data) => {
        const productData = {
            name: data['Nazwa'],
            brand: data['Marka'],
            price: data['Cena'],
            image: data['Zdjęcie'][0]
          }
          try {
            await createProduct(productData)
            onProductAdd()
            methods.reset()
            methods.setValue('Zdjęcie', null)
            setIsAdded(true)
          } catch (error) {
            console.error(error)
          }
    })

    useEffect(() => {
        if (isAdded) {
          setIsAdded(false)
        }
      }, [isAdded])

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          onSubmit();
        }
    }

    return(
        <div className="addProductContainer flex shadow wrap centerX">
            <FormProvider {...methods}>
            <form className="flex wrap centerX" onSubmit={e => e.preventDefault()} noValidate onKeyPress={handleKeyPress}>
            <div className="box header flex">
                <p className="text header">Dodaj produkt</p> 
            </div>
            <div className="addProductBody flex wrap">
                <div className="inputsAddProduct flex wrap addProductContent">
                    <Input valueVar='none' formStyle={formStyle} placeHolder="Marka"/>
                    <Input valueVar='none' formStyle={formStyle} placeHolder="Nazwa"/>
                    <Input valueVar='none' isPrice={true} formStyle={formStyle} placeHolder="Cena"/>
                </div>
                <div className="imgAddContainer addProductContent">
                <ImageInput name="Zdjęcie" setValue={methods.setValue} isAdded={isAdded}/>
                </div>
                <div className="addProductBtnContainer flex centerX">
                    <MidBtn variant="contained" onClick={onSubmit}>Dodaj produkt</MidBtn>
                </div>
               
            </div>
            
            </form>
            </FormProvider>
        </div>
       
    );
}
