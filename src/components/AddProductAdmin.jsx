import { Input } from './Input';
import { MidBtn } from './MidBtn';
import {FormProvider, useForm} from 'react-hook-form'
import { ImageInput } from './ImageInput';

const formStyle = {
    width: '20ch',
}

function AddProductAdmin(){
    const methods = useForm()

    const onSubmit = methods.handleSubmit( (data) => {
      console.log(data);
    })
    return(
        <div className="addProductContainer flex shadow wrap centerX">
            <FormProvider {...methods}>
            <form className="flex wrap centerX" onSubmit={e => e.preventDefault()} noValidate>
            <div className="box header flex">
                <p className="text header">Dodaj produkt</p>
            </div>
            <div className="addProductBody flex wrap">
                <div className="inputsAddProduct flex wrap addProductContent">
                    <Input formStyle={formStyle} placeHolder="Marka"/>
                    <Input formStyle={formStyle} placeHolder="Nazwa"/>
                    <Input formStyle={formStyle} placeHolder="Cena"/>
                </div>
                <div className="imgAddContainer addProductContent">
                <ImageInput />
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

export default AddProductAdmin;
