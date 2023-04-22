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
    <TableContainer className="tableContainer products flex wrap centerX shadow">
        <div className="box header flex">
            <p className="text header">Produkty</p>
        </div>
      <Table sx={tableStyle} size="small" aria-label="a dense table">
            <TableHead>
            <TableRowCustom>
                <TableCellCustom align="center">ID</TableCellCustom>
                <TableCellCustom align="center">Marka</TableCellCustom>
                <TableCellCustom align="center">Nazwa</TableCellCustom>
                <TableCellCustom align="center">Cena</TableCellCustom>
                <TableCellCustom align="center"></TableCellCustom>
            </TableRowCustom>
            </TableHead>
            <TableBody>
            {data.products.map((row) => (
                <TableRowCustom
                key={row.id}
                sx ={{'&:last-of-type': { border: 0 }, 
                '&:hover':{bgcolor: '#F5F5F5'},
                }}
                >
                <TableCellCustom align="center">{row.id}</TableCellCustom>
                <TableCellCustom align="center">{row.brand}</TableCellCustom>
                <TableCellCustom align="center">{row.name}</TableCellCustom>
                <TableCellCustom align="center">{row.price}</TableCellCustom>
                <TableCellCustom align="center"><Button variant="contained" sx={btnStyle}>Usuń</Button></TableCellCustom>
                </TableRowCustom>
            ))}
            </TableBody>
      </Table>
    </TableContainer>
    );
}

export default TableComp;
