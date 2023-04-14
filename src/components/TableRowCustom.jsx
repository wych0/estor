import {styled} from "@mui/material/styles";
import TableRow from '@mui/material/TableRow';

export const TableRowCustom = styled(TableRow)(({ theme }) => ({
    borderBottom: '1px solid rgba(26,24,130,0.3);',
}));