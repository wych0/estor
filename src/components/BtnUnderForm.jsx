import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';

export const BtnUnderForm = styled(Button)(({ theme }) => ({
    marginTop: 0.5,
    height: 50,
    width: 425,
    backgroundColor: 'white',
    color: '#1A1882',
    border: '2px solid #1A1882',
    '&:hover':{
        backgroundColor: '#1A1882',
        color: 'white',
    },
    fontSize: 16,
    fontWeight: "700",
    "@media (max-width:1600px)": {
        width: 375,
    },
}));