import { Input } from './Input';
import { MidBtn } from './MidBtn';
import { SmallBtn } from './SmallBtn';
import {FormProvider, useForm} from 'react-hook-form'

const formStyle = {
    width: '20ch',
}

function AddProductAdmin(){
    const methods = useForm()

    const onSubmit = methods.handleSubmit( (data) => {
      console.log(data);
    })

    const previewImage = (e) => {
        const imageFiles = e.target.files
        if(imageFiles.length > 0){
            const imgSrc = URL.createObjectURL(imageFiles[0])
            const imagePreviewElement = document.querySelector('.previewImg')
            imagePreviewElement.src = imgSrc
            imagePreviewElement.style.display="block"
        }
    }
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
                <div className="boxImgAddAdmin shadow flex centerX centerY">
                    <img className="previewImg" alt=""/>
                </div>
                <SmallBtn fz="small" variant="contained" component="label">
                    Dodaj zdjęcie
                    <input hidden type="file" accept="image/*" onChange={(e) => previewImage(e)} />
                </SmallBtn>
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
