import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';

const btnStyle = {
    color: 'white',
    backgroundColor: '#1A1882',
    '&:hover':{
        backgroundColor: '#283593'
    },
    fontWeight: "700",
    height: 45,
}

export const BigBtn = styled(Button)(() => ({
    ...btnStyle,
    width: '80%',
    fontSize: 13,
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

