import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { Button } from '@mui/material';
import { TableCellCustom } from './TableCellCustom';
import { TableRowCustom } from './TableRowCustom';
import orders from '../orders.json'
import { UserContext } from '../UserContext';
import { useContext } from 'react';

const tableStyle = {
    minWidth: '95%',
    maxWidth: '95%',
}

const btnStyle = {
    width: '90%',
    bgcolor: '#1A1882',
    '&:hover':{
        bgcolor: '#283593'
    },
    fontSize: 12,
    fontWeight: "700",
} 

function TableComp(){
    const {displayOrderDetails} = useContext(UserContext)
    return(
    <TableContainer className="tableContainer flex wrap centerX shadow">
        <div className="box header flex">
            <p className="text header">Twoje zamówienia</p>
        </div>
      <Table sx={tableStyle} size="small" aria-label="a dense table">
            <TableHead>
            <TableRowCustom>
                <TableCellCustom align="center">Numer</TableCellCustom>
                <TableCellCustom align="center">Data</TableCellCustom>
                <TableCellCustom align="center">Koszt</TableCellCustom>
                <TableCellCustom align="center">Status</TableCellCustom>
                <TableCellCustom align="center"></TableCellCustom>
            </TableRowCustom>
            </TableHead>
            <TableBody>
            {orders.map((row) => (
                <TableRowCustom
                key={row.id}
                sx ={{'&:last-of-type': { border: 0 }, 
                '&:hover':{bgcolor: '#F5F5F5'},
                }}
                >
                <TableCellCustom align="center">{row.id}</TableCellCustom>
                <TableCellCustom align="center">{row.date}</TableCellCustom>
                <TableCellCustom align="center">{row.cost}</TableCellCustom>
                <TableCellCustom align="center">{row.status}</TableCellCustom>
                <TableCellCustom align="center"><Button variant="contained" sx={btnStyle} onClick={() => displayOrderDetails(row.id)}>Szczegóły</Button></TableCellCustom>
                </TableRowCustom>
            ))}
            </TableBody>
      </Table>
    </TableContainer>
    );
}

export default TableComp;
