import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';

export const SignupLoginBtn = styled(Button)(({ theme }) => ({
    marginTop: '2%',
    marginBottom: '5%',
    height: 50,
    width: 425,
    backgroundColor: '#1A1882',
    '&:hover':{
        backgroundColor: '#283593'
    },
    fontSize: 16,
    fontWeight: "700",
    "@media (max-width:1600px)": {
      width: 375,
    },
}));
