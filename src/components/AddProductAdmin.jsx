import { Input } from './Input';
import { MidBtn } from './MidBtn';
import { SmallBtn } from './SmallBtn';

const formStyle = {
    width: '20ch',
}

const labelStyle = {
  color: '#1A1882',
  "&.Mui-focused":{
      color: '#1A1882',
      fontWeight: "700",
  },
  fontWeight: "400",
  fontSize: 15,
}



function AddProductAdmin(){
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
            <div className="box header flex">
                <p className="text header">Dodaj produkt</p>
            </div>
            <div className="addProductBody flex wrap">
                <div className="inputsAddProduct flex wrap addProductContent">
                    <Input formStyle={formStyle} labelStyle={labelStyle} placeHolder="Marka"/>
                    <Input formStyle={formStyle} labelStyle={labelStyle} placeHolder="Nazwa"/>
                    <Input formStyle={formStyle} labelStyle={labelStyle} placeHolder="Cena"/>
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
                    <MidBtn variant="contained">Dodaj produkt</MidBtn>
                </div>
            </div>
            
            
        </div>
       
    );
}

export default AddProductAdmin;
