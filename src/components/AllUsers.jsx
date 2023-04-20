import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { TableCellCustom } from './TableCellCustom';
import { TableRowCustom } from './TableRowCustom';
import data from '../data.js'

const tableStyle = {
    minWidth: '95%',
    maxWidth: '95%',
}

function TableComp(){
    return(
    <TableContainer className="tableContainer adminPageContent flex wrap centerX shadow">
        <div className="box header flex">
            <p className="text header">Użytkownicy</p>
        </div>
      <Table sx={tableStyle} size="small" aria-label="a dense table">
            <TableHead>
            <TableRowCustom>
                <TableCellCustom align="center">ID</TableCellCustom>
                <TableCellCustom align="center">Nazwa</TableCellCustom>
            </TableRowCustom>
            </TableHead>
            <TableBody>
            {data.users.map((row) => (
                <TableRowCustom
                key={row.id}
                sx ={{'&:last-of-type': { border: 0 }, 
                '&:hover':{bgcolor: '#F5F5F5'},
                }}
                >
                <TableCellCustom align="center">{row.id}</TableCellCustom>
                <TableCellCustom align="center">{row.name}</TableCellCustom>
                </TableRowCustom>
            ))}
            </TableBody>
      </Table>
    </TableContainer>
    );
}

export default TableComp;
