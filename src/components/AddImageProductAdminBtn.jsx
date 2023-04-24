import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';

export const AddImageProductAdminBtn = styled(Button)(({ theme }) => ({
    height: '40px',
    width: '125px',
    backgroundColor: '#1A1882',
    '&:hover':{
        backgroundColor: '#283593'
    },
    fontSize: 12,
    fontWeight: "700",
}));