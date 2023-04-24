import {styled} from "@mui/material/styles";
import Button from '@mui/material/Button';

const TableBtn = styled(Button)(({ theme }) => ({
    width: '90%',
    maxWidth: '90px',
    backgroundColor: '#1A1882',
    '&:hover':{
        backgroundColor: '#283593'
    },
    fontSize: 12,
    fontWeight: "700",
}));

export default TableBtn