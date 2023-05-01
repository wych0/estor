import data from '../../data.js'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import {TableBtn, TableRowHead, TableRowCustom, TableCellCustom, TableCustom} from '../TableComponents'

export function TableUsers(){
    return(
    <div className="flex wrap pageContent adminPage">
    <TableContainer className="tableContainer users flex wrap centerX shadow">
        <div className="box header flex">
            <p className="text header">Użytkownicy</p>
        </div>
      <TableCustom size="small" aria-label="a dense table">
            <TableHead>
            <TableRowHead>
                <TableCellCustom align="center">ID</TableCellCustom>
                <TableCellCustom align="center">Nazwa</TableCellCustom>
                <TableCellCustom align="center">E-mail</TableCellCustom>
                <TableCellCustom align="center">Status konta</TableCellCustom>
                <TableCellCustom align="center"></TableCellCustom>
            </TableRowHead>
            </TableHead>
            <TableBody>
            {data.users.map((row) => (
                <TableRowCustom
                key={row.id}
                >
                <TableCellCustom align="center">{row.id}</TableCellCustom>
                <TableCellCustom align="center">{row.name}</TableCellCustom>
                <TableCellCustom align="center">{row.email}</TableCellCustom>
                <TableCellCustom align="center">{row.isBlocked ? 'Zablokowane' : 'Aktywne'}</TableCellCustom>
                <TableCellCustom align="center"><TableBtn variant="contained">{row.isBlocked ? 'Odblokuj' : 'Zablokuj'}</TableBtn></TableCellCustom>
                </TableRowCustom>
            ))}
            </TableBody>
      </TableCustom>
    </TableContainer>
    </div>
    );
}

