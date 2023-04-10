import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';

export const LogoutBtn = styled(Button)(({ theme }) => ({
    height: 50,
    width: 190,
    backgroundColor: '#1A1882',
    '&:hover':{
        backgroundColor: '#283593'
    },
    fontSize: 15,
    fontWeight: "700",
}));