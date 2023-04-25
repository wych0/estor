import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';

export const CompleteBtn = styled(Button)(({ theme }) => ({
    marginTop: '8%',
    marginBottom: '5%',
    height: 50,
    width: 400,
    backgroundColor: '#1A1882',
    '&:hover':{
        backgroundColor: '#283593'
    },
    fontSize: 16,
    fontWeight: "700",
    "@media (max-width:1600px)": {
      height: 45,
      width: 300,
      fontSize: 13,
      fontWeight: "600",
    },
}));