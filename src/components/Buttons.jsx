import {styled} from "@mui/material/styles"
import Button from '@mui/material/Button'

const btnStyle = {
    color: 'white',
    backgroundColor: '#1A1882',
    '&:hover':{
        backgroundColor: '#283593'
    },
    fontWeight: "700",
    height: 45,
    fontSize: 16,
}

export const BigBtn = styled(Button)(() => ({
    ...btnStyle,
    width: '300px',
    fontSize: 14,
}));

export const MidBtn = styled(Button)(() => ({
    ...btnStyle,
    width: 167,
    fontSize: 15,
}));

export const SmallBtn = styled(Button)(({fz}) => ({
    ...btnStyle,
    height: '35px',
    width: '125px',
    fontSize: fz==='small' ? 12 : 14, 
}));

export const BtnUnderForm = styled(Button)(() => ({
    ...btnStyle,
    height: 50,
    width: '65%',
    backgroundColor: 'white',
    color: '#1A1882',
    border: '2px solid #1A1882',
    '&:hover':{
        backgroundColor: '#1A1882',
        color: 'white',
    },
}));

export const SignupLoginBtn = styled(Button)(() => ({
    ...btnStyle,
    marginTop: '2%',
    marginBottom: '8%',
    height: 50,
    width: '65%',
}));

export const NavButton = styled(Button)(() => ({
    ...btnStyle,
    borderRadius: '10px',
    maxWidth: '50px', 
    maxHeight: '50px', 
    minWidth: '50px', 
    minHeight: '50px',
    "@media (max-width:1600px)": {
        maxWidth: '45px', 
        maxHeight: '45px', 
        minWidth: '45px', 
        minHeight: '45px',
      },
}));

export const DialogButton = styled(Button)(() => ({
    ...btnStyle,
    width: '20px',
    maxHeight: '40px'
}));


