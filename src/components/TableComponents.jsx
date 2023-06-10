import {styled} from "@mui/material/styles"
import TableRow from '@mui/material/TableRow'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import Button from '@mui/material/Button'

export const TableRowHead = styled(TableRow)(() => ({
    borderBottom: '1px solid rgba(26,24,130,0.3);',
}));

export const TableRowCustom = styled(TableRow)(() => ({
    borderBottom: '1px solid rgba(26,24,130,0.3);',
    '&:hover':{backgroundColor: '#F5F5F5'},
    '&:last-of-type': { border: 0 }
}));

export const TableCustom = styled(Table)(() => ({
    minWidth: '95%',
    maxWidth: '95%',
}));

export const TableCellCustom = styled(TableCell)(() => ({
    border: 0,
}));

export const TableBtn = styled(Button)(() => ({
    width: '90%',
    maxWidth: '90px',
    backgroundColor: '#1A1882',
    '&:hover':{
        backgroundColor: '#283593'
    },
    fontSize: 12,
    fontWeight: "700",
    color: 'white'
}));

