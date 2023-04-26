import {styled} from "@mui/material/styles";
import OutlinedInput from '@mui/material/OutlinedInput';

export const OutlinedInputCustom = styled(OutlinedInput)(({ theme, isvalid }) => ({
    '& .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: isvalid ? "#1A1882" : "#d32f2f",
    },
    height: '50px',
    
}));