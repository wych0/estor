import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';

export const BigBtn = styled(Button)(({ theme }) => ({
    color: 'white',
    height: 45,
    width: '80%',
    backgroundColor: '#1A1882',
    '&:hover':{
        backgroundColor: '#283593'
    },
    fontSize: 13,
    fontWeight: "700",
}));

