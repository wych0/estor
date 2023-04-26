import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';

export const SmallBtn = styled(Button)(({ theme, fz}) => ({
    height: '35px',
    width: '125px',
    backgroundColor: '#1A1882',
    '&:hover':{
        backgroundColor: '#283593'
    },
    fontWeight: "700",
    fontSize: fz==='small' ? 12 : 14, 
}));