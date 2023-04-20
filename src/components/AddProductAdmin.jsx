import { Button } from '@mui/material';
import Input from './Input';

const btnStyle = {
    width: '90%',
    maxWidth: '90px',
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
    return(
        <div className="addProductContainer flex shadow wrap centerX">
            <div className="box header flex">
                <p className="text header">Dodaj produkt</p>
            </div>
            <div className="inputsAddProduct">
                <Input formStyle={formStyle} placeHolder="Marka"/>
                <Input formStyle={formStyle} placeHolder="Nazwa"/>
                <Input formStyle={formStyle} placeHolder="Cena"/>
            </div>
            
        </div>
       
    );
}

export default AddProductAdmin;
