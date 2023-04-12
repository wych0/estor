import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';

export const NavButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#1A1882',
    '&:hover':{
        backgroundColor: '#283593'
    },
    borderRadius: "10px",
    color: 'white',
    maxWidth: '50px', 
    maxHeight: '50px', 
    minWidth: '50px', 
    minHeight: '50px',
    display: 'flex',
    alignItems: 'center',
    "@media (max-width:1600px)": {
        maxWidth: '45px', 
        maxHeight: '45px', 
        minWidth: '45px', 
        minHeight: '45px',
      },
}));
