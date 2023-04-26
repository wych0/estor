import {styled} from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';

export const InputLabelCustom = styled(InputLabel)(({ theme, isvalid, fz}) => ({
    color: isvalid ? "#1A1882" : "#d32f2f", 
    "&.Mui-focused":{
      color: isvalid ? "#1A1882" : "#d32f2f", 
      fontWeight: "700",
    },
    fontWeight: "500",
    fontSize: fz,
    backgroundColor: 'white',
    paddingRight: '3px'

}));