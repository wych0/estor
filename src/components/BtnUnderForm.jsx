import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';

export const BtnUnderForm = styled(Button)(({ theme }) => ({
    height: 50,
    width: '65%',
    backgroundColor: 'white',
    color: '#1A1882',
    border: '2px solid #1A1882',
    '&:hover':{
        backgroundColor: '#1A1882',
        color: 'white',
    },
    fontSize: 16,
    fontWeight: "700",
}));