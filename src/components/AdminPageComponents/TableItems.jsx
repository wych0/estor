import data from '../../data.js'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import {TableBtn, TableRowHead, TableRowCustom, TableCellCustom, TableCustom} from '../TableComponents'

export function TableItems(){
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
