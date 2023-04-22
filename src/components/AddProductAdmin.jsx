import { Button } from '@mui/material';
import Input from './Input';

const btnStyle = {
    width: '125px',
    bgcolor: '#1A1882',
    '&:hover':{
        bgcolor: '#283593'
    },
    fontSize: 12,
    fontWeight: "700",
}

const formStyle = {
    marginBottom: '6%',
    width: '25ch',
    "@media (max-width:1600px)": {
      width: '23ch',
    },
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
                <div className="inputsAddProduct addProductContent">
                    <Input formStyle={formStyle} placeHolder="Marka"/>
                    <Input formStyle={formStyle} placeHolder="Nazwa"/>
                    <Input formStyle={formStyle} placeHolder="Cena"/>
                </div>
                <div className="imgAddContainer addProductContent">
                <div className="boxImgAddAdmin shadow flex centerX centerY">
                    <img className="previewImg"/>
                </div>
                <Button variant="contained" component="label" sx={btnStyle}>
                    Dodaj zdjęcie
                    <input hidden type="file" accept="image/*" onChange={(e) => previewImage(e)} />
                </Button>
                </div>
            </div>
            
            
        </div>
       
    );
}

export default AddProductAdmin;
