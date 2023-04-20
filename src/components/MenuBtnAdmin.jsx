import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';

export const MenuBtnAdmin = styled(Button)(({ theme }) => ({
    marginBottom: '4%',
    color: 'white',
    height: 45,
    width: '80%',
    backgroundColor: '#1A1882',
    '&:hover':{
        backgroundColor: '#283593'
    },
    fontSize: 13,
    fontWeight: "700",
    "@media (max-width:1600px)": {
      height: 40
    },
}));

