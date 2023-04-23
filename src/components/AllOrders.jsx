import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { TableCellCustom } from './TableCellCustom';
import { TableRowCustom } from './TableRowCustom';
import data from '../data.js'
import { Button } from '@mui/material';

const btnStyle = {
    width: '90%',
    maxWidth: '90px',
    bgcolor: '#1A1882',
    '&:hover':{
        bgcolor: '#283593'
    },
    fontSize: 12,
    fontWeight: "700",
}

const tableStyle = {
    minWidth: '95%',
    maxWidth: '95%',
}

function TableComp(){
    return(
    <div className="flex wrap adminPageContent adminProducts">
    <TableContainer className="tableContainer orders flex wrap centerX shadow">
        <div className="box header flex">
            <p className="text header">Zamówienia</p>
        </div>
      <Table sx={tableStyle} size="small" aria-label="a dense table">
            <TableHead>
            <TableRowCustom>
                <TableCellCustom align="center">ID</TableCellCustom>
                <TableCellCustom align="center">Data</TableCellCustom>
                <TableCellCustom align="center">Koszt</TableCellCustom>
                <TableCellCustom align="center">Status</TableCellCustom>
                <TableCellCustom align="center">ID Klienta</TableCellCustom>
                <TableCellCustom align="center"></TableCellCustom>
                <TableCellCustom align="center"></TableCellCustom>
            </TableRowCustom>
            </TableHead>
            <TableBody>
            {data.orders.map((row) => (
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
                <TableCellCustom align="center">{row.customer}</TableCellCustom>
                <TableCellCustom align="center"><Button disabled={row.status==='W realizacji' ? false : true} variant="contained" sx={btnStyle}>Anuluj</Button></TableCellCustom>
                <TableCellCustom align="center"><Button disabled={row.status==='W realizacji' ? false : true} variant="contained" sx={btnStyle}>Zatwierdź</Button></TableCellCustom>
                </TableRowCustom>
            ))}
            </TableBody>
      </Table>
    </TableContainer>
    </div>
    );
}

export default TableComp;
