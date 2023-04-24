import { TableCustom } from './TableCustom';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { TableCellCustom } from './TableCellCustom';
import { TableRowCustom } from './TableRowCustom';
import data from '../data.js'
import TableBtn from './TableBtn'
import { TableRowHead } from './TableRowHead';

function TableComp(){
    return(
    <div className="flex wrap adminPageContent">
    <TableContainer className="tableContainer orders flex wrap centerX shadow">
        <div className="box header flex">
            <p className="text header">Zamówienia</p>
        </div>
      <TableCustom size="small" aria-label="a dense table">
            <TableHead>
            <TableRowHead>
                <TableCellCustom align="center">ID</TableCellCustom>
                <TableCellCustom align="center">Data</TableCellCustom>
                <TableCellCustom align="center">Koszt</TableCellCustom>
                <TableCellCustom align="center">Status</TableCellCustom>
                <TableCellCustom align="center">ID Klienta</TableCellCustom>
                <TableCellCustom align="center"></TableCellCustom>
                <TableCellCustom align="center"></TableCellCustom>
            </TableRowHead>
            </TableHead>
            <TableBody>
            {data.orders.map((row) => (
                <TableRowCustom
                key={row.id}
                >
                <TableCellCustom align="center">{row.id}</TableCellCustom>
                <TableCellCustom align="center">{row.date}</TableCellCustom> 
                <TableCellCustom align="center">{row.cost}</TableCellCustom>
                <TableCellCustom align="center">{row.status}</TableCellCustom>
                <TableCellCustom align="center">{row.customer}</TableCellCustom>
                <TableCellCustom align="center"><TableBtn disabled={row.status==='W realizacji' ? false : true} variant="contained">Anuluj</TableBtn></TableCellCustom>
                <TableCellCustom align="center"><TableBtn disabled={row.status==='W realizacji' ? false : true} variant="contained">Zatwierdź</TableBtn></TableCellCustom>
                </TableRowCustom>
            ))}
            </TableBody>
      </TableCustom>
    </TableContainer>
    </div>
    );
}

export default TableComp;
