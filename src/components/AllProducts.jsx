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
    <TableContainer className="tableContainer products flex wrap centerX shadow">
        <div className="box header flex">
            <p className="text header">Produkty</p>
        </div>
      <TableCustom size="small" aria-label="a dense table">
            <TableHead>
            <TableRowHead>
                <TableCellCustom align="center">ID</TableCellCustom>
                <TableCellCustom align="center">Marka</TableCellCustom>
                <TableCellCustom align="center">Nazwa</TableCellCustom>
                <TableCellCustom align="center">Cena</TableCellCustom>
                <TableCellCustom align="center">Status</TableCellCustom>
                <TableCellCustom align="center"></TableCellCustom>
            </TableRowHead>
            </TableHead>
            <TableBody>
            {data.products.map((row) => (
                <TableRowCustom
                key={row.id}
                >
                <TableCellCustom align="center">{row.id}</TableCellCustom>
                <TableCellCustom align="center">{row.brand}</TableCellCustom>
                <TableCellCustom align="center">{row.name}</TableCellCustom>
                <TableCellCustom align="center">{row.price}</TableCellCustom>
                <TableCellCustom align="center">{row.isSold ? 'Sprzedany' : 'Dostępny'}</TableCellCustom>
                <TableCellCustom align="center"><TableBtn variant="contained">Usuń</TableBtn></TableCellCustom>
                </TableRowCustom>
            ))}
            </TableBody>
      </TableCustom>
    </TableContainer>
    );
}

export default TableComp;
