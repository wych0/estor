import {styled} from "@mui/material/styles"
import InputLabel from '@mui/material/InputLabel'

export const InputLabelCustom = styled(InputLabel)(({ theme, isvalid, fz}) => ({
    color: isvalid==='true' ? "#1A1882" : "#C1292E", 
    "&.Mui-focused":{
      color: isvalid==='true' ? "#1A1882" : "#C1292E", 
      fontWeight: "700",
    },
    fontWeight: "500",
    fontSize: fz,
}));