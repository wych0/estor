import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';

export const NavButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#1A1882',
    '&:hover':{
        backgroundColor: '#283593'
    },
    fontSize: '22px',
    borderRadius: "10px",
    color: 'white',
    maxWidth: '50px', 
    maxHeight: '50px', 
    minWidth: '50px', 
    minHeight: '50px',
    display: 'flex',
    alignItems: 'center',
}));
