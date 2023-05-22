import { UserContext } from '../../UserContext'
import { useContext, useState, useEffect } from 'react'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import {TableBtn, TableRowHead, TableRowCustom, TableCellCustom, TableCustom} from '../TableComponents'
import { getUserOrders } from '../../apiCalls/order.js'

export default function UserOders(){
    const [userOrders, setUserOrders] = useState([])
    const {displayOrderDetails, user} = useContext(UserContext)

    useEffect(()=>{
        getUserOrders(user.id).then((orders)=>setUserOrders(orders))
    },[user.id, setUserOrders])

    return(
    <TableContainer className="pageContent accPage tableContainer flex wrap centerX shadow">
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
                key={row._id}
                sx ={{'&:last-of-type': { border: 0}, 
                '&:hover':{bgcolor: '#F5F5F5'},
                }}
                >
                <TableCellCustom align="center">{row._id.slice(15)}</TableCellCustom>
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
