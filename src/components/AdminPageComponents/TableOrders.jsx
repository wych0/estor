import { useState, useEffect } from 'react'
import { getOrders } from '../../apiCalls/order.js'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import {TableBtn, TableRowHead, TableRowCustom, TableCellCustom, TableCustom} from '../TableComponents'

export function TableOrders(){
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        getOrders().then((orders)=>setOrders(orders))
    }, [])
    return(
    <div className="flex wrap pageContent adminPage">
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
            </TableRowHead>
            </TableHead>
            <TableBody>
            {orders.map((row) => (
                <TableRowCustom
                key={row.id}
                >
                <TableCellCustom align="center">{row._id.slice(15)}</TableCellCustom>
                <TableCellCustom align="center">{row.date}</TableCellCustom> 
                <TableCellCustom align="center">{row.cost}</TableCellCustom>
                <TableCellCustom align="center">{row.status}</TableCellCustom>
                <TableCellCustom align="center">{row.userID.slice(15)}</TableCellCustom>
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

