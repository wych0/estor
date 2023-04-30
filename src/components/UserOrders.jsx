import data from '../data.js'
import { UserContext } from '../UserContext';
import { useContext } from 'react';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import {TableBtn, TableRowHead, TableRowCustom, TableCellCustom, TableCustom} from './TableComponents'

function TableComp(){
    const {displayOrderDetails, user} = useContext(UserContext)
    const userOrders = data.orders.filter(el => el.customer===user.id)
    return(
    <TableContainer className="tableContainer flex wrap centerX shadow">
        <div className="box header flex">
            <p className="text header">Twoje zamówienia</p>
        </div>
      <TableCustom size="small" aria-label="a dense table">
            <TableHead>
            <TableRowHead>
                <TableCellCustom align="center">Numer</TableCellCustom>
                <TableCellCustom align="center">Data</TableCellCustom>
                <TableCellCustom align="center">Koszt</TableCellCustom>
                <TableCellCustom align="center">Status</TableCellCustom>
                <TableCellCustom align="center"></TableCellCustom>
            </TableRowHead>
            </TableHead>
            <TableBody>
            {userOrders.map((row) => (
                <TableRowCustom
                key={row.id}
                sx ={{'&:last-of-type': { border: 0}, 
                '&:hover':{bgcolor: '#F5F5F5'},
                }}
                >
                <TableCellCustom align="center">{row.id}</TableCellCustom>
                <TableCellCustom align="center">{row.date}</TableCellCustom>
                <TableCellCustom align="center">{row.cost}</TableCellCustom>
                <TableCellCustom align="center">{row.status}</TableCellCustom>
                <TableCellCustom align="center"><TableBtn variant="contained" onClick={() => displayOrderDetails(row.id)}>Szczegóły</TableBtn></TableCellCustom>
                </TableRowCustom>
            ))}
            </TableBody>
      </TableCustom>
    </TableContainer>
    );
}

export default TableComp;
